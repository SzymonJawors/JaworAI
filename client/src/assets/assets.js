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


