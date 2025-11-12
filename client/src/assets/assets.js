import logo from "./logo.svg";
import user_group from "./user_group.png";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import profile_img_1 from "./profile_img_1.png";
import arrow_icon from "./arrow_icon.svg";
import {
  SquarePen,
  Hash,
  Image,
  Eraser,
  Scissors,
  FileText,
} from "lucide-react";
import ai_gen_img_1 from "./ai_gen_img_1.png";
import ai_gen_img_2 from "./ai_gen_img_2.png";
import ai_gen_img_3 from "./ai_gen_img_3.png";

export const assets = {
  logo,
  user_group,
  star_icon,
  star_dull_icon,
  profile_img_1,
  arrow_icon,
};

export const AiToolsData = [
  {
    title: "Generowanie Artykułów AI",
    description:
      "Generuj wysokiej jakości, angażujące artykuły na dowolny temat dzięki naszej technologii AI.",
    Icon: SquarePen,
    bg: { from: "#3588F2", to: "#0BB0D7" },
    path: "/ai/write-article",
  },
  {
    title: "Generator Tytułów Bloga",
    description:
      "Znajdź idealny, chwytliwy tytuł dla swoich wpisów blogowych dzięki naszemu generatorowi wspieranemu przez AI.",
    Icon: Hash,
    bg: { from: "#B153EA", to: "#E549A3" },
    path: "/ai/blog-titles",
  },
  {
    title: "Generowanie Obrazów AI",
    description:
      "Twórz oszałamiające wizualizacje dzięki naszemu narzędziu do generowania obrazów AI i doświadcz mocy sztucznej inteligencji.",
    Icon: Image,
    bg: { from: "#20C363", to: "#11B97E" },
    path: "/ai/generate-images",
  },
  {
    title: "Usuwanie Tła",
    description:
      "Bez wysiłku usuwaj tła ze swoich obrazów dzięki naszemu narzędziu wspieranemu przez AI.",
    Icon: Eraser,
    bg: { from: "#F76C1C", to: "#F04A3C" },
    path: "/ai/remove-background",
  },
  {
    title: "Usuwanie Obiektów",
    description:
      "Bezproblemowo usuwaj niechciane obiekty ze swoich obrazów dzięki naszemu narzędziu AI.",
    Icon: Scissors,
    bg: { from: "#5C6AF1", to: "#427DF5" },
    path: "/ai/remove-object",
  },
  {
    title: "Analiza CV",
    description:
      "Otrzymaj analize swojego CV przez AI i zwiększ swoje szanse na zdobycie wymarzonej pracy.",
    Icon: FileText,
    bg: { from: "#12B7AC", to: "#08B6CE" },
    path: "/ai/review-resume",
  },
];

export const dummyTestimonialData = [
  {
    image: assets.profile_img_1,
    name: "John Doe",
    title: "Marketing Director, TechCorp",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Sed id dui ut libero ultrices tincidunt. Fusce et justo sit amet nulla ullamcorper tincidunt. Proin auctor, justo at consequat congue, elit urna facilisis nunc, non hendrerit nisi metus et risus.",
    rating: 4,
  },
  {
    image: assets.profile_img_1,
    name: "Jane Smith",
    title: "Content Creator, TechCorp",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Sed id dui ut libero ultrices tincidunt. Fusce et justo sit amet nulla ullamcorper tincidunt. Proin auctor, justo at consequat congue, elit urna facilisis nunc, non hendrerit nisi metus et risus.",

    rating: 5,
  },
  {
    image: assets.profile_img_1,
    name: "David Lee",
    title: "Content Writer, TechCorp",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Sed id dui ut libero ultrices tincidunt. Fusce et justo sit amet nulla ullamcorper tincidunt. Proin auctor, justo at consequat congue, elit urna facilisis nunc, non hendrerit nisi metus et risus.",
    rating: 4,
  },
];

export const dummyCreationData = [
  {
    id: 9,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt:
      "Wygeneruj tytuł wpisu na bloga dla słowa kluczowego 'blog' w kategorii Technologia.",
    content:
      "Oto kilka propozycji tytułów dla bloga technologicznego, ujętych z różnych perspektyw:\n\n**Ogólne i szerokie:**\n\n*   Blog o Technologii: Nowości, Recenzje i Analizy\n*   Technologia Dziś: Twoja Codzienna Dawka Tech Newsów\n*   Przyszłość Teraz: Odkrywając Świat Technologii\n*   Tech Talk: Rozkładając Innowacje na Cząstki Pierwsze\n\n**Bardziej konkretne i intrygujące:**\n\n*   Odkoduj Technologię: Zrozumieć Cyfrowy Świat\n*   Poza Gadżetami: Prawdziwe Oblicze Technologii",
    type: "tytuł-bloga",
    publish: false,
    likes: [],
    created_at: "2025-07-01T11:09:50.492Z",
    updated_at: "2025-07-01T11:09:50.492Z",
  },
  {
    id: 8,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt:
      "Wygeneruj tytuł wpisu na bloga dla słowa kluczowego 'blog' w kategorii Ogólne.",
    content:
      "Oto kilka propozycji tytułów dla bloga o blogowaniu w kategorii Ogólne — od prostych po bardziej kreatywne:\n\n**Proste:**\n\n*   Blog o Blogu: Wszystko, co Musisz Wiedzieć o Blogowaniu\n*   Blogowe Wskazówki: Porady, Triki i Trendy\n*   Twój Przewodnik po Świecie Blogowania\n\n**Bardziej kreatywne:**\n\n*   Poza Postem: Sztuka Blogowania\n*   Odsłonięta Blogosfera: Jak Poruszać się po Świecie Pisania Online",
    type: "tytuł-bloga",
    publish: false,
    likes: [],
    created_at: "2025-07-01T11:08:10.450Z",
    updated_at: "2025-07-01T11:08:10.450Z",
  },
  {
    id: 7,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt:
      "Napisz artykuł o sztucznej inteligencji i programowaniu w skrócie (500–800 słów).",
    content:
      "## Sztuczna inteligencja i programowanie: symbioza, która kształtuje przyszłość\n\nSztuczna inteligencja (AI) i programowanie, kiedyś odrębne dziedziny, dziś tworzą silny, współzależny związek, który rewolucjonizuje przemysł i przyspiesza innowacje. Zrozumienie tej relacji jest kluczowe dla każdego, kto chce odnaleźć się w przyszłości technologii.\n\nW swojej istocie AI to zdolność maszyny do naśladowania ludzkiej inteligencji. Realizuje się to poprzez algorytmy – zestawy instrukcji starannie tworzone przez programistów. Programowanie jest więc kręgosłupem AI, dostarczając języka i struktury niezbędnej do ożywienia tych algorytmów.\n\n**Programowanie napędza AI: budowanie fundamentu**\n\nModele AI nie powstają znikąd – są tworzone, trenowane i wdrażane za pomocą kodu. Oto jak to wygląda:\n\n*   **Przetwarzanie danych:** Surowe dane – paliwo AI – są często chaotyczne i nieprzydatne w oryginalnej formie. Programiści używają języków takich jak Python oraz bibliotek Pandas czy NumPy do czyszczenia, transformacji i przygotowania danych do treningu.\n*   **Tworzenie modelu:** Programiści wykorzystują języki Python lub R oraz biblioteki uczenia maszynowego, takie jak TensorFlow, PyTorch czy scikit-learn, aby budować i trenować modele. Biblioteki te oferują gotowe funkcje, które ułatwiają tworzenie złożonych algorytmów.\n*   **Wdrożenie i integracja:** Po treningu model musi zostać zintegrowany z rzeczywistymi aplikacjami – to wymaga kodu, który łączy model z systemami użytkownika i prezentuje wyniki w przyjazny sposób.\n*   **Utrzymanie i optymalizacja:** Modele AI wymagają stałego monitorowania, aktualizacji i poprawiania. Programiści odpowiadają za wykrywanie problemów, ponowne trenowanie modeli na nowych danych i dostosowywanie ich do zmieniających się potrzeb.\n\n**AI wspiera programowanie: rewolucjonizuje proces tworzenia**\n\nRelacja ta działa też w drugą stronę – AI coraz bardziej wspiera samych programistów.\n\n*   **Podpowiedzi kodu:** Narzędzia oparte na AI, jak GitHub Copilot czy Tabnine, analizują kontekst i sugerują fragmenty kodu, przyspieszając pracę i redukując powtarzalne zadania.\n*   **Automatyczne testowanie i debugowanie:** AI potrafi automatycznie testować kod i wykrywać błędy, analizując wzorce i potencjalne luki.\n*   **Generowanie kodu:** AI potrafi już tworzyć kod na podstawie opisu w języku naturalnym, co pozwala programistom skupić się na bardziej złożonych aspektach projektu.\n*   **Spersonalizowana nauka:** AI potrafi dopasować materiały edukacyjne i udzielać indywidualnych wskazówek początkującym programistom.\n\n**Przyszłość: współpraca i specjalizacja**\n\nPrzyszłość AI i programowania to coraz głębsza współpraca. Wraz z rozwojem AI programiści będą koncentrować się na zadaniach wyższego poziomu – projektowaniu architektur, zarządzaniu danymi i aspektach etycznych.\n\nOsoby łączące wiedzę z zakresu AI i programowania są coraz bardziej poszukiwane i będą odgrywać kluczową rolę w kształtowaniu przyszłości technologii.\n\n**Podsumowując:** sztuczna inteligencja i programowanie to dwie strony tej samej monety – kodowanie tworzy fundament AI, a AI wspiera kodowanie, czyniąc proces tworzenia bardziej wydajnym i innowacyjnym.",
    type: "artykuł",
    publish: false,
    likes: [],
    created_at: "2025-07-01T11:07:51.312Z",
    updated_at: "2025-07-01T11:07:51.312Z",
  },
];

export const dummyPublishedCreationData = [
  {
    id: 1,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt:
      "Generate an image of A Boy is on Boat , and fishing in the style Anime style.",
    content: ai_gen_img_1,
    type: "image",
    publish: true,
    likes: [
      "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
      "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
    ],
    created_at: "2025-06-19T09:02:25.035Z",
    updated_at: "2025-06-19T09:58:37.552Z",
  },
  {
    id: 2,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt:
      "Generate an image of A Boy Riding a bicycle on road and bicycle is from year 2201  in the style Anime style.",
    content: ai_gen_img_2,
    type: "image",
    publish: true,
    likes: [
      "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
      "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
    ],
    created_at: "2025-06-19T08:16:54.614Z",
    updated_at: "2025-06-19T09:58:40.072Z",
  },
  {
    id: 3,
    user_id: "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
    prompt:
      "Generate an image of a boy riding a car on sky in the style Realistic.",
    content: ai_gen_img_3,
    type: "image",
    publish: true,
    likes: ["user_2yaW5EHzeDfQbXdAJWYFnZo2bje"],
    created_at: "2025-06-23T11:29:23.351Z",
    updated_at: "2025-06-23T11:29:44.434Z",
    __v: 1,
  },
];
