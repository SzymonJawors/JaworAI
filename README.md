# Jawor AI

Jawor AI to nowoczesna aplikacja webowa stworzona w **React**, **Node.js** i **Express**, oferująca inteligentnego asystenta AI z funkcjami rejestracji, logowania oraz opcją premium.

>  Uwaga: Aplikacja jest obecnie w **trybie development**, a zakup premium jest symulowany za pomocą testowej karty.

---

## Funkcjonalności

* Rejestracja i logowanie użytkowników za pomocą **Clerk**
* Interakcja z AI – odpowiedzi są generowane i zapisywane
* Możliwość zakupu premium (w trybie testowym)
* Responsywny interfejs użytkownika w React

---

## Technologie

* **Frontend:** React, TailwindCSS
* **Backend:** Node.js + Express
* **Autoryzacja:** Clerk
* **Baza danych:** PostgreSQL
* **Płatności:** Stripe (tryb testowy)
* **Hosting:** Vercel

---

## Instalacja

1. Sklonuj repozytorium:

```
git clone https://github.com/twoj-uzytkownik/jawor-ai.git
cd jawor-ai
```

2. Zainstaluj zależności frontend i backend:

```
cd client
npm install

cd ../server
npm install
```
---

## Uruchamianie aplikacji w trybie development

1. Uruchom backend:

```
cd server
npm run dev
```

2. Uruchom frontend:

```
cd client
npm start
```

Aplikacja powinna być dostępna pod `http://localhost:3000`.

---

## Premium

* W trybie development zakup premium jest automatyczny i działa z testową kartą płatniczą Stripe.
* Po zakupie premium użytkownik otrzymuje dostęp do dodatkowych funkcji AI.

---

## Struktura projektu

```
/client   - frontend React
/server   - backend Express
```

---


## Licencja

MIT License © Szymon

# Jawor AI

Jawor AI is a modern web application built with **React**, **Node.js**, and **Express**, offering an AI assistant with user registration, login, and premium features.

> ⚠️ Note: The application is currently in **development mode**, and premium purchase is simulated using a test card.

---

## Features

* User registration and login via **Clerk**
* AI interaction – responses are generated and saved
* Premium purchase option (in test mode)
* Responsive user interface built with React

---

## Technologies

* **Frontend:** React, TailwindCSS
* **Backend:** Node.js + Express
* **Authentication:** Clerk
* **Database:** PostgreSQL
* **Payments:** Stripe (test mode)
* **Hosting:** Vercel

---

## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/jawor-ai.git
cd jawor-ai
```

2. Install dependencies for frontend and backend:

```
cd client
npm install

cd ../server
npm install
```

---

## Running in Development Mode

1. Start the backend:

```
cd server
npm run dev
```

2. Start the frontend:

```
cd client
npm start
```

The application should be available at `http://localhost:3000`.

---

## Premium

* In development mode, premium purchase is automatic and works with a Stripe test card.
* After purchasing premium, users gain access to additional AI features.

---

## Project Structure

```
/client   - React frontend
/server   - Express backend
```

---

## License

MIT License © Szymon

