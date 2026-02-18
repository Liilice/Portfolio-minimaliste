import IntranetAccueil from "../assets/project/intranet/accueil.png";
import IntranetCreneau from "../assets/project/intranet/creneau.png";
import IntranetGestionnaire from "../assets/project/intranet/gestionnaire.png";
import FConnectionAccueil from "../assets/project/fconnection/Our Team.jpg";
import FConnectionAccommodation from "../assets/project/fconnection/accommodation.jpg";
import FConnectionServices from "../assets/project/fconnection/Services-fun Activities.jpg";
import FConnectionTravel from "../assets/project/fconnection/Travel Specialist.jpg";
import FConnectionDestinations from "../assets/project/fconnection/World Wild Destinations - ville.jpg";
import HealthFlowAccueil from "../assets/project/healthFlow/accueil.png";
import HealthFlowAddItem from "../assets/project/healthFlow/addItem.png";
import HealthFlowCalorieKnow from "../assets/project/healthFlow/calorieKnow.png";
import HealthFlowDetailOfJourney from "../assets/project/healthFlow/detailOfJourney.png";
import HealthFlowSplashscreen from "../assets/project/healthFlow/splashscreen.png";
import OmniscienceMobileAccueil from "../assets/project/omniscience/mobile/accueil.png";
import OmniscienceMobileCourse from "../assets/project/omniscience/mobile/course.png";
import OmniscienceMobileEvaluation from "../assets/project/omniscience/mobile/evaluation.png";
import OmniscienceMobileProfil from "../assets/project/omniscience/mobile/profil.png";
import OmniscienceWebLandingPage from "../assets/project/omniscience/web/landingPage.png";
import PortfolioPokemonAboutMe from "../assets/project/portfolioPokemon/aboutMe.png";
import PortfolioPokemonContact from "../assets/project/portfolioPokemon/contact.png";
import PortfolioPokemonProject from "../assets/project/portfolioPokemon/project.png";
import SmartMealAccueil from "../assets/project/smartMeal/accueil.png";
import SmartMealDetails from "../assets/project/smartMeal/details.png";
import SmartMealListRecipe from "../assets/project/smartMeal/listRecipe.jpg";

import type { Project } from "../components/ui/ProjectCard";

const PROJECTS: Project[] = [
  {
    category: "Web",
    title: "Intranet",
    description:
      "Ce projet m’a permis de découvrir Django en développant un intranet pour une auto-école. L’application centralise la gestion des utilisateurs (secrétaires, instructeurs, élèves, admin), des plannings et des réservations de créneaux, ainsi que le suivi des formations, afin d’optimiser l’organisation au quotidien.",
    images: [
      { url: IntranetAccueil, alt: "Intranet accueil" },
      { url: IntranetCreneau, alt: "Intranet reservation de creneau" },
      { url: IntranetGestionnaire, alt: "Intranet gestionnaire" },
    ],
    stack: ["Django", "SQLite", "HTML", "CSS", "JavaScript"],
    onlineLink: "https://intranet.guillaume-reboullet.com/",
    githubLink: "https://github.com/Liilice/Intranet",
  },
  {
    category: "Design",
    title: "Refonte Design – Fconnection",
    description:
      "Objectif : créer une identité digitale plus luxueuse, moderne et premium, alignée avec l’image et les ambitions de Fconnection. Le design proposé est épuré et élégant, porté par une palette sophistiquée, des visuels haut de gamme et une typographie soignée, pour une expérience cohérente et impactante.",
    stack: ["Figma"],
    images: [
      { url: FConnectionAccueil, alt: "FConnection Accueil" },
      { url: FConnectionAccommodation, alt: "FConnection Accommodation" },
      { url: FConnectionServices, alt: "FConnection Services" },
      { url: FConnectionTravel, alt: "FConnection Travel" },
      { url: FConnectionDestinations, alt: "FConnection Destinations" },
    ],
  },
  {
    category: "Mobile",
    title: "HealthFlow",
    description:
      "Application mobile qui accompagne l’utilisateur vers un mode de vie plus sain. Elle calcule les calories en fonction du poids des aliments, additionne les apports sur la journée et les compare au métabolisme de base. L’objectif : visualiser ses repas et vérifier le respect des apports recommandés.",
    stack: ["React Native", "Expo", "Supabase"],
    images: [
      { url: HealthFlowAccueil, alt: "HealthFlow accueil" },
      { url: HealthFlowAddItem, alt: "HealthFlow add item" },
      { url: HealthFlowCalorieKnow, alt: "HealthFlow calorie know" },
      { url: HealthFlowDetailOfJourney, alt: "HealthFlow detail of journey" },
      { url: HealthFlowSplashscreen, alt: "HealthFlow splashscreen" },
    ],
    githubLink: "https://github.com/Liilice/HealthFlow",
  },
  {
    category: "Mobile",
    title: "Omniscience Mobile",
    description:
      "Application mobile qui rend l’accès au savoir simple et personnalisé, du débutant à l’expert. Elle génère des cours et des quiz ludiques grâce à une IA développée en Python, avec une structuration des connaissances. Le projet vise une plateforme d’apprentissage efficace, au-delà d’une simple recherche web.",
    stack: ["Python", "Neo4j", "React Native", "NestJS", "AI"],
    images: [
      { url: OmniscienceMobileAccueil, alt: "Omniscience mobile accueil" },
      { url: OmniscienceMobileCourse, alt: "Omniscience mobile course" },
      {
        url: OmniscienceMobileEvaluation,
        alt: "Omniscience mobile evaluation",
      },
      { url: OmniscienceMobileProfil, alt: "Omniscience mobile profil" },
    ],
    onlineLink: "",
    githubLink: "https://github.com/Liilice/Omniscience",
  },
  {
    category: "Web",
    title: "Omniscience Web",
    description:
      "Landing page conçue pour présenter Omniscience, une application mobile dédiée à l’apprentissage personnalisé grâce à l’intelligence artificielle. L’objectif est de valoriser le concept, ses fonctionnalités clés et l’univers du projet, avec une interface claire, moderne et responsive, pensée pour convertir et donner envie de tester.",
    stack: ["React", "Tailwind CSS"],
    images: [
      { url: OmniscienceWebLandingPage, alt: "Omniscience web landing page" },
    ],
    onlineLink: "https://omniscience.guillaume-reboullet.com/",
  },
  {
    category: "Web",
    title: "Portfolio - univers Pokemon",
    description:
      "Portfolio de fin d’année imaginé dans l’univers Pokémon, mêlant créativité et compétences techniques. Le site propose une navigation structurée, une expérience immersive et des sections claires (présentation, projets, contact). L’objectif : mettre en valeur mon profil, mes réalisations et mon identité à travers un thème fort.",
    stack: ["React", "Tailwind CSS", "NestJS", "PostgreSQL"],
    images: [
      { url: PortfolioPokemonAboutMe, alt: "Portfolio Pokemon about me" },
      { url: PortfolioPokemonContact, alt: "Portfolio Pokemon contact" },
      { url: PortfolioPokemonProject, alt: "Portfolio Pokemon project" },
    ],
    onlineLink: "https://alice-zheng.ovh/",
    githubLink: "https://github.com/Liilice/Portfolio-pokemon",
  },
  {
    category: "Mobile",
    title: "SmartMeal",
    description:
      "Application mobile qui propose des idées de repas et génère automatiquement la liste d’ingrédients nécessaire. Elle permet de partager la liste par SMS à ses contacts et aide à localiser un supermarché à proximité pour faire ses courses. L’objectif : gagner du temps et simplifier l’organisation des repas.",
    stack: ["React Native", "API Externe"],
    images: [
      { url: SmartMealAccueil, alt: "SmartMeal accueil" },
      { url: SmartMealDetails, alt: "SmartMeal details" },
      { url: SmartMealListRecipe, alt: "SmartMeal list recipe" },
    ],
    githubLink: "https://github.com/Liilice/smart-meal",
  },
];

export default PROJECTS;
