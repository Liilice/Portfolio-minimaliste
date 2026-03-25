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
    "Développement d’un intranet pour une auto-école afin de centraliser la gestion des utilisateurs, des plannings et des réservations. L’objectif était de simplifier l’organisation quotidienne via une interface unifiée. Réalisé avec Django pour structurer la logique métier et gérer efficacement les rôles et permissions.",
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
  "Refonte complète de l’identité digitale de Fconnection avec une approche orientée expérience utilisateur et positionnement premium. Le design met l’accent sur la lisibilité, la hiérarchie visuelle et une esthétique cohérente pour renforcer l’image de marque.",
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
  "Application mobile de suivi nutritionnel permettant de calculer et analyser les apports caloriques journaliers. L’objectif est d’aider l’utilisateur à mieux comprendre ses habitudes alimentaires via une visualisation claire des données. Développée en React Native avec un backend Supabase pour la gestion des données en temps réel.",
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
  "Application mobile d’apprentissage personnalisé exploitant une IA pour générer des cours et des évaluations adaptés au niveau de l’utilisateur. Le projet s’appuie sur une structuration des connaissances (Neo4j) et une API en Python pour proposer une expérience éducative évolutive et interactive.",
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
  "Landing page conçue pour présenter et valoriser Omniscience, une application d’apprentissage basée sur l’IA. L’objectif est de clarifier le produit, mettre en avant ses fonctionnalités clés et optimiser la conversion grâce à une interface moderne et responsive.",
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
  "Portfolio interactif développé autour de l’univers Pokémon pour présenter mes projets de manière immersive. L’objectif était de combiner identité visuelle forte et structure claire, tout en mettant en avant mes compétences full-stack à travers une application complète.",
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
  "Application mobile facilitant la planification des repas en générant automatiquement des recettes et listes de courses. Elle intègre des fonctionnalités de partage et de localisation pour simplifier l’organisation quotidienne. Développée en React Native avec intégration d’API externes.",
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
