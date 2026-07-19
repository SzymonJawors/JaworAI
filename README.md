<div align="center">

<img src="client/src/assets/logo.svg" alt="Jawor AI logo" width="220"/>

# Jawor AI

**A full-stack SaaS platform for AI-powered content creation** — articles, blog titles, images, background/object removal and resume review, built with React 19, Express 5 and Google Gemini.

🇬🇧 [English](#-english) · 🇵🇱 [Polski](#-polski)

</div>

---

# 🇬🇧 English

## Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Running with Docker](#running-with-docker)
- [Notes & Known Limitations](#notes--known-limitations)
- [License](#license)

## Overview

Jawor AI is a monorepo composed of a **React (Vite) frontend** (`/client`) and an **Express.js backend** (`/server`). Authenticated users can generate text and images via the Gemini API (through an OpenAI-compatible client), remove image backgrounds/objects via Cloudinary, and get AI feedback on a PDF resume. Free users are limited to 10 generations for some tools; several tools are gated behind a **premium** plan managed through Clerk's billing (`PricingTable`). Every creation is stored in a PostgreSQL (Neon) database and can optionally be published to a public **Community** gallery with likes.

## Screenshots


<p align="center">
  <img width="100%" alt="Jawor AI screenshot 1" src="https://github.com/user-attachments/assets/46a38f22-28c3-44c0-bcd6-0a90b700f4d3" />
  <img width="100%" alt="Jawor AI screenshot 2" src="https://github.com/user-attachments/assets/f44256fe-c20f-416a-a6e6-cef3faf4945f" />
  <img width="100%" alt="Jawor AI screenshot 3" src="https://github.com/user-attachments/assets/e18500a3-2dbc-4931-92b1-28b665a0333d" />
  <img width="100%" alt="Jawor AI screenshot 4" src="https://github.com/user-attachments/assets/6d5f8336-8ba8-460f-a6db-c7b46aec766f" />
  <img width="100%" alt="Jawor AI screenshot 5" src="https://github.com/user-attachments/assets/4cdcc043-364d-4308-be4a-37c4c38aea28" />
</p>

## Features

Based on the actual routes, controllers and React pages found in the repository:

| Tool | Route (frontend) | API endpoint | Access |
|---|---|---|---|
| AI Article Writer | `/ai/write-article` | `POST /api/ai/generate-article` | Free (10 uses) / Premium (unlimited) |
| Blog Title Generator | `/ai/blog-titles` | `POST /api/ai/generate-blog-title` | Free (10 uses) / Premium (unlimited) |
| AI Image Generation | `/ai/generate-images` | `POST /api/ai/generate-image` | Premium only |
| Background Removal | `/ai/remove-background` | `POST /api/ai/remove-image-background` | Premium only |
| Object Removal | `/ai/remove-object` | `POST /api/ai/remove-image-object` | Premium only |
| Resume (CV) Review | `/ai/review-resume` | `POST /api/ai/resume-review` | Premium only |
| Community Gallery | `/ai/community` | `GET /api/user/get-published-creations`, `POST /api/user/toggle-like-creation` | Authenticated users |
| Dashboard (creation history) | `/ai` (index) | `GET /api/user/get-user-creations` | Authenticated users |

Additional confirmed functionality:
- **Authentication** is fully handled by **Clerk** (`@clerk/clerk-react` on the frontend, `@clerk/express` on the backend), including a built-in `SignIn` component and `clerkMiddleware`/`requireAuth` route protection.
- **Plan/paywall logic**: a custom `auth` middleware reads the user's plan via Clerk's `has({ plan: "premium" })` and tracks a `free_usage` counter stored in Clerk's private user metadata; free users are capped at 10 generations for the article/blog-title tools.
- **Pricing table** is rendered directly via Clerk's `<PricingTable />` component (no custom Stripe integration code was found in the repository).
- **Persistence**: creations (`prompt`, `content`, `type`, `publish`, `likes`) are stored in PostgreSQL via `@neondatabase/serverless` (Neon's serverless driver) using raw SQL template queries.
- **File uploads** (images for background/object removal, PDF resumes) are handled with `multer` (disk storage) and forwarded to Cloudinary / `pdf-parse`.
- **Landing page** includes Hero, AI Tools showcase, Testimonials, Pricing and Footer sections (`Hero.jsx`, `AiTools.jsx`, `Testimonial.jsx`, `Plan.jsx`, `Footer.jsx`).

## Tech Stack

**Frontend** (`/client`)
- React 19 + React Router 7
- Vite 7 (with `@vitejs/plugin-react-swc`)
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Clerk React SDK (`@clerk/clerk-react`, `@clerk/localizations`)
- `axios`, `react-hot-toast`, `react-markdown`, `lucide-react`

**Backend** (`/server`)
- Node.js + Express 5
- `@clerk/express` for authentication middleware
- `openai` SDK pointed at Google's Gemini OpenAI-compatible endpoint (`gemini-2.0-flash` model)
- `@neondatabase/serverless` (Neon Postgres, serverless HTTP driver)
- `cloudinary` (image hosting, background removal, generative object removal)
- `axios` (Clipdrop text-to-image API)
- `multer` (multipart/form-data uploads)
- `pdf-parse` (PDF text extraction for resume review)
- `nodemon` (dev dependency)

**Infrastructure**
- Docker (separate `Dockerfile` for client and server) + `docker-compose.yml`
- Vercel deployment configs (`vercel.json`) present for both client and server

## Project Structure

```
JaworAI/
├── client/                      # React + Vite frontend
│   ├── src/
│   │   ├── assets/              # logo, icons, images, static data (assets.js)
│   │   ├── components/          # AiTools, CreationItem, Footer, Hero, Navbar, Plan, Sidebar, Testimonial
│   │   ├── pages/                # Home, Layout, Dashboard, WriteArticle, BlogTitles,
│   │   │                          GenerateImages, RemoveBackground, RemoveObject,
│   │   │                          ReviewResume, Community
│   │   ├── App.jsx               # Route definitions
│   │   └── main.jsx              # App bootstrap (ClerkProvider, BrowserRouter)
│   ├── public/                   # favicon, gradient background
│   ├── Dockerfile
│   ├── vercel.json
│   └── vite.config.js
├── server/                      # Express backend
│   ├── configs/                  # cloudinary.js, db.js (Neon), multer.js
│   ├── controllers/              # aiController.js, userController.js
│   ├── middlewares/              # auth.js (Clerk plan / free-usage gate)
│   ├── routes/                   # aiRoutes.js, userRoutes.js
│   ├── server.js                  # App entry point
│   ├── Dockerfile
│   └── vercel.json
├── docker-compose.yml
└── README.md
```

## Architecture

```
┌──────────────┐        HTTPS / JSON        ┌───────────────┐
│   React SPA  │  ───────────────────────▶  │  Express API  │
│  (client)    │  ◀───────────────────────  │   (server)    │
└──────┬───────┘                            └───────┬───────┘
       │ Clerk (auth UI, session)                    │ Clerk (clerkMiddleware / requireAuth)
       ▼                                              ▼
  Clerk Cloud  ◀──────────── plan / free_usage ─────  Custom `auth` middleware
                                                       │
                                              ┌────────┼─────────┬────────────┬───────────┐
                                              ▼        ▼         ▼            ▼           ▼
                                        Gemini API  Clipdrop  Cloudinary  Neon Postgres  pdf-parse
                                        (articles,  (image     (uploads,                 (resume
                                         titles,    generation) bg/object                 text
                                         resume)                removal)                  extraction)
```

## API Endpoints

All `/api/ai/*` and `/api/user/*` routes require a valid Clerk session (`requireAuth`), and most also pass through the custom `auth` middleware for plan/usage checks.

**AI (`/api/ai`)**
- `POST /generate-article` — generate an article from a prompt (`prompt`, `lenght` in body)
- `POST /generate-blog-title` — generate a blog title from a prompt
- `POST /generate-image` — generate an image from a prompt via Clipdrop, stored on Cloudinary (premium only)
- `POST /remove-image-background` — upload an image (`multipart/form-data`, field `image`) and remove its background (premium only)
- `POST /remove-image-object` — upload an image and remove a named object (`object` field) (premium only)
- `POST /resume-review` — upload a PDF (`multipart/form-data`, field `resume`, max 5 MB) and get an AI review (premium only)

**User (`/api/user`)**
- `GET /get-user-creations` — list the authenticated user's creations
- `GET /get-published-creations` — list all publicly published creations (Community gallery)
- `POST /toggle-like-creation` — like/unlike a creation (`id` in body)

## Environment Variables

**`server/.env`**

| Variable | Used for |
|---|---|
| `PORT` | HTTP port for the Express server (defaults to `3000`) |
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `GEMINI_API_KEY` | Google Gemini API key, used via the OpenAI-compatible endpoint |
| `CLIPDROP_API_KEY` | Clipdrop text-to-image API key |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary account cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `CLERK_SECRET_KEY`* | Clerk secret key required by `@clerk/express` |


**`client/.env`**

| Variable | Used for |
|---|---|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key (`ClerkProvider`) |
| `VITE_BASE_URL` | Base URL of the backend API (used as `axios.defaults.baseURL`) |

## Getting Started

### Prerequisites
- Node.js 18+ (the Docker images use `node:18-alpine`)
- A Neon PostgreSQL database with a `creations` table (schema not included in the repository — must be created manually, e.g. `id, user_id, prompt, content, type, publish, likes, created_at`)
- Accounts/API keys for Clerk, Google Gemini, Clipdrop and Cloudinary

### 1. Clone the repository
```bash
git clone https://github.com/SzymonJawors/JaworAI.git
cd JaworAI
```

### 2. Install dependencies
```bash
cd server
npm install

cd ../client
npm install
```

### 3. Configure environment variables
Create a `.env` file in `server/` and one in `client/` using the tables above.

### 4. Run the backend
```bash
cd server
npm run server   # starts with nodemon (auto-reload)
# or
npm start        # starts with node (production-style)
```
The API listens on `http://localhost:3000` by default (or the port set in `PORT`).

### 5. Run the frontend
```bash
cd client
npm run dev
```
Vite's dev server will print the local URL (by default `http://localhost:5173`).


## Running with Docker

A `docker-compose.yml` at the repository root builds both services:

```bash
docker compose up --build
```

- **backend** → built from `server/Dockerfile`, exposed on port `3000`
- **frontend** → built from `client/Dockerfile`, exposed on port `5173`, runs `npm run dev` inside the container
- Both services load environment variables from a single `.env` file at the repository root (`env_file: .env`), so combine the server and client variables listed above into that file.


## License

MIT License © Szymon

---

# 🇵🇱 Polski

## Spis treści

- [Opis projektu](#opis-projektu)
- [Zrzuty ekranu](#zrzuty-ekranu)
- [Funkcjonalności](#funkcjonalności)
- [Stos technologiczny](#stos-technologiczny)
- [Struktura projektu](#struktura-projektu-1)
- [Architektura](#architektura)
- [Endpointy API](#endpointy-api)
- [Zmienne środowiskowe](#zmienne-środowiskowe)
- [Uruchomienie projektu](#uruchomienie-projektu)
- [Uruchomienie w Dockerze](#uruchomienie-w-dockerze)
- [Uwagi i znane ograniczenia](#uwagi-i-znane-ograniczenia)
- [Licencja](#licencja)

## Opis projektu

Jawor AI to monorepo składające się z **frontendu React (Vite)** (`/client`) oraz **backendu Express.js** (`/server`). Zalogowani użytkownicy mogą generować tekst i obrazy za pomocą API Gemini (przez klienta kompatybilnego z OpenAI), usuwać tło/obiekty ze zdjęć dzięki Cloudinary oraz otrzymać ocenę CV w formacie PDF wygenerowaną przez AI. Użytkownicy darmowi mają limit 10 generacji w niektórych narzędziach; część funkcji jest dostępna wyłącznie w planie **premium**, obsługiwanym przez system płatności Clerk (`PricingTable`). Każda wygenerowana treść jest zapisywana w bazie PostgreSQL (Neon) i opcjonalnie może zostać opublikowana w publicznej galerii **Community** z możliwością polubień.

## Zrzuty ekranu


<p align="center">
  <img width="100%" alt="Zrzut ekranu Jawor AI 1" src="https://github.com/user-attachments/assets/46a38f22-28c3-44c0-bcd6-0a90b700f4d3" />
  <img width="100%" alt="Zrzut ekranu Jawor AI 2" src="https://github.com/user-attachments/assets/f44256fe-c20f-416a-a6e6-cef3faf4945f" />
  <img width="100%" alt="Zrzut ekranu Jawor AI 3" src="https://github.com/user-attachments/assets/e18500a3-2dbc-4931-92b1-28b665a0333d" />
  <img width="100%" alt="Zrzut ekranu Jawor AI 4" src="https://github.com/user-attachments/assets/6d5f8336-8ba8-460f-a6db-c7b46aec766f" />
  <img width="100%" alt="Zrzut ekranu Jawor AI 5" src="https://github.com/user-attachments/assets/4cdcc043-364d-4308-be4a-37c4c38aea28" />
</p>

## Funkcjonalności


| Narzędzie | Trasa (frontend) | Endpoint API | Dostęp |
|---|---|---|---|
| Generator artykułów AI | `/ai/write-article` | `POST /api/ai/generate-article` | Darmowy (10 użyć) / Premium (bez limitu) |
| Generator tytułów bloga | `/ai/blog-titles` | `POST /api/ai/generate-blog-title` | Darmowy (10 użyć) / Premium (bez limitu) |
| Generowanie obrazów AI | `/ai/generate-images` | `POST /api/ai/generate-image` | Tylko premium |
| Usuwanie tła | `/ai/remove-background` | `POST /api/ai/remove-image-background` | Tylko premium |
| Usuwanie obiektów | `/ai/remove-object` | `POST /api/ai/remove-image-object` | Tylko premium |
| Analiza CV | `/ai/review-resume` | `POST /api/ai/resume-review` | Tylko premium |
| Galeria Community | `/ai/community` | `GET /api/user/get-published-creations`, `POST /api/user/toggle-like-creation` | Zalogowani użytkownicy |
| Dashboard (historia generacji) | `/ai` (strona główna panelu) | `GET /api/user/get-user-creations` | Zalogowani użytkownicy |

Dodatkowe funkcjonalności:
- **Uwierzytelnianie** jest w całości obsługiwane przez **Clerk** (`@clerk/clerk-react` po stronie frontendu, `@clerk/express` po stronie backendu), wraz z wbudowanym komponentem `SignIn` oraz ochroną tras przez `clerkMiddleware`/`requireAuth`.
- **Logika planu/paywalla**: własny middleware `auth` odczytuje plan użytkownika za pomocą `has({ plan: "premium" })` z Clerk oraz śledzi licznik `free_usage` przechowywany w prywatnych metadanych użytkownika Clerk; darmowi użytkownicy mają limit 10 generacji dla narzędzi artykułów i tytułów bloga.
- **Tabela cenowa** jest renderowana bezpośrednio za pomocą komponentu Clerk `<PricingTable />` (w repozytorium nie znaleziono żadnego własnego kodu integracji ze Stripe).
- **Zapis danych**: wygenerowane treści (`prompt`, `content`, `type`, `publish`, `likes`) są zapisywane w PostgreSQL za pomocą `@neondatabase/serverless` (sterownik serverless Neon) przy użyciu surowych zapytań SQL (template queries).
- **Przesyłanie plików** (obrazy do usuwania tła/obiektów, pliki PDF z CV) jest obsługiwane przez `multer` (zapis na dysku) i przekazywane do Cloudinary / `pdf-parse`.
- **Strona główna (landing page)** zawiera sekcje Hero, prezentację narzędzi AI, opinie klientów, cennik oraz stopkę (`Hero.jsx`, `AiTools.jsx`, `Testimonial.jsx`, `Plan.jsx`, `Footer.jsx`).
## Stos technologiczny

**Frontend** (`/client`)
- React 19 + React Router 7
- Vite 7 (z `@vitejs/plugin-react-swc`)
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Clerk React SDK (`@clerk/clerk-react`, `@clerk/localizations`)
- `axios`, `react-hot-toast`, `react-markdown`, `lucide-react`

**Backend** (`/server`)
- Node.js + Express 5
- `@clerk/express` jako middleware uwierzytelniający
- SDK `openai` skierowane na endpoint Gemini kompatybilny z OpenAI (model `gemini-2.0-flash`)
- `@neondatabase/serverless` (Neon Postgres, sterownik HTTP serverless)
- `cloudinary` (hosting obrazów, usuwanie tła, generatywne usuwanie obiektów)
- `axios` (API Clipdrop text-to-image)
- `multer` (przesyłanie plików multipart/form-data)
- `pdf-parse` (ekstrakcja tekstu z PDF do analizy CV)
- `nodemon` (zależność deweloperska)

**Infrastruktura**
- Docker (osobny `Dockerfile` dla klienta i serwera) + `docker-compose.yml`
- Konfiguracje wdrożeniowe Vercel (`vercel.json`) dla klienta i serwera

## Struktura projektu

```
JaworAI/
├── client/                      # Frontend React + Vite
│   ├── src/
│   │   ├── assets/              # logo, ikony, obrazy, dane statyczne (assets.js)
│   │   ├── components/          # AiTools, CreationItem, Footer, Hero, Navbar, Plan, Sidebar, Testimonial
│   │   ├── pages/                # Home, Layout, Dashboard, WriteArticle, BlogTitles,
│   │   │                          GenerateImages, RemoveBackground, RemoveObject,
│   │   │                          ReviewResume, Community
│   │   ├── App.jsx               # Definicje tras
│   │   └── main.jsx              # Inicjalizacja aplikacji (ClerkProvider, BrowserRouter)
│   ├── public/                   # favicon, tło gradientowe
│   ├── Dockerfile
│   ├── vercel.json
│   └── vite.config.js
├── server/                      # Backend Express
│   ├── configs/                  # cloudinary.js, db.js (Neon), multer.js
│   ├── controllers/              # aiController.js, userController.js
│   ├── middlewares/              # auth.js (weryfikacja planu / limitu darmowych użyć)
│   ├── routes/                   # aiRoutes.js, userRoutes.js
│   ├── server.js                  # Punkt wejścia aplikacji
│   ├── Dockerfile
│   └── vercel.json
├── docker-compose.yml
└── README.md
```

## Architektura

```
┌──────────────┐        HTTPS / JSON        ┌───────────────┐
│  Aplikacja   │  ───────────────────────▶  │   API Express │
│  React (SPA) │  ◀───────────────────────  │   (server)    │
└──────┬───────┘                            └───────┬───────┘
       │ Clerk (UI logowania, sesja)                  │ Clerk (clerkMiddleware / requireAuth)
       ▼                                              ▼
  Clerk Cloud  ◀───────── plan / free_usage ────────  Własny middleware `auth`
                                                       │
                                              ┌────────┼─────────┬────────────┬───────────┐
                                              ▼        ▼         ▼            ▼           ▼
                                        Gemini API  Clipdrop  Cloudinary  Neon Postgres  pdf-parse
                                        (artykuły,  (generowanie (upload,                (ekstrakcja
                                         tytuły,     obrazów)    usuwanie tła/             tekstu z
                                         CV)                     obiektów)                 CV)
```

## Endpointy API

Wszystkie trasy `/api/ai/*` oraz `/api/user/*` wymagają aktywnej sesji Clerk (`requireAuth`), a większość dodatkowo przechodzi przez własny middleware `auth`, który sprawdza plan i limit użyć.

**AI (`/api/ai`)**
- `POST /generate-article` — generuje artykuł na podstawie promptu (`prompt`, `lenght` w treści żądania)
- `POST /generate-blog-title` — generuje tytuł bloga na podstawie promptu
- `POST /generate-image` — generuje obraz na podstawie promptu przez Clipdrop, zapisywany na Cloudinary (tylko premium)
- `POST /remove-image-background` — przesyła obraz (`multipart/form-data`, pole `image`) i usuwa jego tło (tylko premium)
- `POST /remove-image-object` — przesyła obraz i usuwa wskazany obiekt (pole `object`) (tylko premium)
- `POST /resume-review` — przesyła plik PDF (`multipart/form-data`, pole `resume`, maks. 5 MB) i zwraca ocenę CV wygenerowaną przez AI (tylko premium)

**Użytkownik (`/api/user`)**
- `GET /get-user-creations` — lista wygenerowanych treści zalogowanego użytkownika
- `GET /get-published-creations` — lista wszystkich publicznie opublikowanych treści (galeria Community)
- `POST /toggle-like-creation` — polubienie/cofnięcie polubienia treści (`id` w treści żądania)

## Zmienne środowiskowe

**`server/.env`**

| Zmienna | Do czego służy |
|---|---|
| `PORT` | Port HTTP serwera Express (domyślnie `3000`) |
| `DATABASE_URL` | Connection string do bazy PostgreSQL Neon |
| `GEMINI_API_KEY` | Klucz API Google Gemini, używany przez endpoint kompatybilny z OpenAI |
| `CLIPDROP_API_KEY` | Klucz API Clipdrop text-to-image |
| `CLOUDINARY_CLOUD_NAME` | Nazwa chmury (cloud name) konta Cloudinary |
| `CLOUDINARY_API_KEY` | Klucz API Cloudinary |
| `CLOUDINARY_API_SECRET` | Sekret API Cloudinary |
| `CLERK_SECRET_KEY`* | Klucz sekretny Clerk wymagany przez `@clerk/express` |


**`client/.env`**

| Zmienna | Do czego służy |
|---|---|
| `VITE_CLERK_PUBLISHABLE_KEY` | Publiczny klucz Clerk (`ClerkProvider`) |
| `VITE_BASE_URL` | Bazowy URL API backendu (używany jako `axios.defaults.baseURL`) |

## Uruchomienie projektu

### Wymagania wstępne
- Node.js 18+ (obrazy Docker używają `node:18-alpine`)
- Baza PostgreSQL Neon z tabelą `creations` (schemat nie jest zawarty w repozytorium — należy utworzyć ją ręcznie, np. `id, user_id, prompt, content, type, publish, likes, created_at`)
- Konta/klucze API do Clerk, Google Gemini, Clipdrop oraz Cloudinary

### 1. Sklonuj repozytorium
```bash
git clone https://github.com/SzymonJawors/JaworAI.git
cd JaworAI
```

### 2. Zainstaluj zależności
```bash
cd server
npm install

cd ../client
npm install
```

### 3. Skonfiguruj zmienne środowiskowe
Utwórz plik `.env` w katalogu `server/` oraz w katalogu `client/`, korzystając z tabel powyżej.

### 4. Uruchom backend
```bash
cd server
npm run server   # uruchamia z nodemon (auto-reload)
# lub
npm start        # uruchamia z node (tryb produkcyjny)
```
API domyślnie nasłuchuje na `http://localhost:3000` (lub porcie ustawionym w `PORT`).

### 5. Uruchom frontend
```bash
cd client
npm run dev
```
Serwer deweloperski Vite wypisze lokalny adres URL (domyślnie `http://localhost:5173`).


## Uruchomienie w Dockerze

Plik `docker-compose.yml` w katalogu głównym repozytorium buduje obie usługi:

```bash
docker compose up --build
```

- **backend** → budowany z `server/Dockerfile`, udostępniony na porcie `3000`
- **frontend** → budowany z `client/Dockerfile`, udostępniony na porcie `5173`, wewnątrz kontenera uruchamia `npm run dev`
- Obie usługi wczytują zmienne środowiskowe z jednego pliku `.env` w katalogu głównym (`env_file: .env`) — należy więc połączyć w nim zmienne serwera i klienta wymienione powyżej.

## Licencja

MIT License © Szymon
