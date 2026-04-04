import IntranetAccueil from "../assets/project/intranet/accueil.png";
import IntranetCreneau from "../assets/project/intranet/creneau.png";
import IntranetGestionnaire from "../assets/project/intranet/gestionnaire.png";
import FConnectionAppercu from "../assets/project/fconnection/appercu.png";
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
import PortfolioPokemonAboutMe from "../assets/project/portfolioPokemon/aboutMe.png";
import PortfolioPokemonContact from "../assets/project/portfolioPokemon/contact.png";
import PortfolioPokemonProject from "../assets/project/portfolioPokemon/project.png";
import SmartMealAccueil from "../assets/project/smartMeal/accueil.png";
import SmartMealDetails from "../assets/project/smartMeal/details.png";
import SmartMealListRecipe from "../assets/project/smartMeal/listRecipe.png";
import ChoraleAccueil from "../assets/project/choraleDeBonsChoeurs/accueil.png";
import ChoraleConcerts from "../assets/project/choraleDeBonsChoeurs/concerts.png";
import ChoraleAchat from "../assets/project/choraleDeBonsChoeurs/achat.png";
import ChoraleSumup from "../assets/project/choraleDeBonsChoeurs/sumup.png";

import type { Project } from "../components/ui/ProjectCard";

const PROJECTS: Project[] = [
  {
    category: "Web",
    title: "Chorale de Bons Chœurs — Billetterie en ligne",
    description:
      "Développement d’une plateforme complète de billetterie en ligne pour la Chorale de Bons Chœurs, permettant la réservation et le paiement sécurisé de places pour des concerts. Le projet intègre un système de paiement, une gestion des commandes et un panel administrateur pour le contrôle des billets.",
    more: [
      {
        title: "Contexte",
        content:
          "La chorale avait besoin d’un système simple et fiable pour vendre des billets en ligne, gérer les réservations et contrôler les entrées lors des événements.",
      },
      {
        title: "Problème",
        content:
          "L’absence de solution digitale entraînait une gestion manuelle des réservations, difficile à suivre et sujette aux erreurs, notamment lors du contrôle des billets le jour du concert.",
      },
      {
        title: "Solution",
        content:
          "Mise en place d’une billetterie web complète avec paiement sécurisé (SumUp), génération de tickets, envoi automatique d’emails de confirmation, et un panel administrateur permettant de valider les billets en temps réel et suivre les entrées.",
      },
      {
        title: "Fonctionnalités clés",
        content:
          "Réservation en ligne, paiement sécurisé, génération de tickets, envoi d’emails automatisés, interface d’administration avec gestion et validation des billets, gestion des quantités et suivi des participants.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase (Firestore)",
      "SumUp API",
      "Nodemailer",
    ],
    images: [
      { url: ChoraleAccueil, alt: "Page de réservation des concerts" },
      { url: ChoraleConcerts, alt: "Liste des concerts" },
      { url: ChoraleAchat, alt: "Pop-up d'achat" },
      { url: ChoraleSumup, alt: "Intégration de sumup" },
    ],
    onlineLink: "https://chorale-de-bons-choeurs.vercel.app/",
  },
  {
    category: "Mobile",
    title: "HealthFlow — Application mobile de suivi nutritionnel",
    description:
      "Application mobile de suivi nutritionnel permettant d’enregistrer les repas, calculer les apports caloriques et les comparer aux besoins journaliers. Développée en React Native avec Supabase, elle vise une expérience claire, pratique et orientée accompagnement utilisateur.",
    more: [
      {
        title: "Contexte",
        content:
          "Concevoir une application mobile utile pour suivre simplement son alimentation au quotidien.",
      },
      {
        title: "Problème",
        content:
          "Les données nutritionnelles sont souvent dispersées ou peu lisibles pour un usage régulier.",
      },
      {
        title: "Solution",
        content:
          "Centraliser les repas, automatiser le calcul calorique et offrir une lecture claire des apports journaliers.",
      },
    ],
    stack: ["React Native", "Expo", "Supabase"],
    images: [
      { url: HealthFlowSplashscreen, alt: "HealthFlow splashscreen" },
      { url: HealthFlowAccueil, alt: "HealthFlow accueil" },
      { url: HealthFlowAddItem, alt: "HealthFlow add item" },
      { url: HealthFlowCalorieKnow, alt: "HealthFlow calorie know" },
      { url: HealthFlowDetailOfJourney, alt: "HealthFlow detail of journey" },
    ],
    githubLink: "https://github.com/Liilice/HealthFlow",
  },
  {
    category: "Design",
    title: "Refonte Design – Fconnection",
    description:
      "Refonte complète de l’identité digitale de Fconnection avec une approche orientée expérience utilisateur et positionnement premium. Le design met l’accent sur la lisibilité, la hiérarchie visuelle et une esthétique cohérente pour renforcer l’image de marque.",
    more: [
      {
        title: "Contexte",
        content:
          "Repenser l’univers visuel de Fconnection afin d’aligner son image digitale avec un positionnement plus haut de gamme.",
      },
      {
        title: "Problème",
        content:
          "Une identité visuelle peu marquée ou insuffisamment cohérente peut limiter la perception de qualité et l’impact de la marque.",
      },
      {
        title: "Solution",
        content:
          "Créer une refonte orientée expérience utilisateur, avec une hiérarchie visuelle plus claire, une esthétique premium et une meilleure cohérence globale.",
      },
    ],
    stack: ["Figma"],
    images: [
      { url: FConnectionAppercu, alt: "FConnection apperçu" },
      { url: FConnectionAccueil, alt: "FConnection Accueil" },
      { url: FConnectionAccommodation, alt: "FConnection Accommodation" },
      { url: FConnectionServices, alt: "FConnection Services" },
      { url: FConnectionTravel, alt: "FConnection Travel" },
      { url: FConnectionDestinations, alt: "FConnection Destinations" },
    ],
  },
  {
    category: "Mobile",
    title: "Omniscience Mobile",
    description:
      "Application mobile d’apprentissage personnalisé exploitant une IA pour générer des cours et des évaluations adaptés au niveau de l’utilisateur. Le projet s’appuie sur une structuration des connaissances (Neo4j) et une API en Python pour proposer une expérience éducative évolutive et interactive.",
    more: [
      {
        title: "Contexte",
        content:
          "Imaginer une application mobile capable de rendre l’apprentissage plus accessible, progressif et personnalisé selon le niveau de chaque utilisateur.",
      },
      {
        title: "Problème",
        content:
          "Les ressources éducatives en ligne sont souvent génériques, peu adaptées au niveau réel de l’apprenant et insuffisamment structurées.",
      },
      {
        title: "Solution",
        content:
          "Développer une application exploitant une IA pour générer des contenus pédagogiques et des évaluations, en s’appuyant sur une structuration des connaissances pour personnaliser l’expérience.",
      },
    ],
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
    title: "Intranet",
    description:
      "Développement d’un intranet pour une auto-école afin de centraliser la gestion des utilisateurs, des plannings et des réservations. L’objectif était de simplifier l’organisation quotidienne via une interface unifiée. Réalisé avec Django pour structurer la logique métier et gérer efficacement les rôles et permissions.",
    more: [
      {
        title: "Contexte",
        content:
          "Concevoir un outil interne capable de simplifier la gestion quotidienne d’une auto-école et de centraliser les opérations essentielles.",
      },
      {
        title: "Problème",
        content:
          "La gestion des utilisateurs, des créneaux et du suivi administratif peut rapidement devenir complexe lorsqu’elle est répartie sur plusieurs supports ou peu structurée.",
      },
      {
        title: "Solution",
        content:
          "Développer un intranet unifié permettant de gérer les rôles, les plannings, les réservations et le suivi des formations dans une seule interface.",
      },
    ],
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
    category: "Web",
    title: "Portfolio - univers Pokemon",
    description:
      "Portfolio interactif développé autour de l’univers Pokémon pour présenter mes projets de manière immersive. L’objectif était de combiner identité visuelle forte et structure claire, tout en mettant en avant mes compétences full-stack à travers une application complète.",
    more: [
      {
        title: "Contexte",
        content:
          "Concevoir un portfolio capable de refléter ma personnalité tout en présentant mes projets dans une interface forte visuellement.",
      },
      {
        title: "Problème",
        content:
          "Un portfolio trop standard peut manquer d’impact et rendre difficile la différenciation auprès d’un recruteur ou d’un visiteur.",
      },
      {
        title: "Solution",
        content:
          "Créer une expérience immersive inspirée de l’univers Pokémon, tout en conservant une structure claire pour mettre en valeur mes compétences et réalisations.",
      },
    ],
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
    more: [
      {
        title: "Contexte",
        content:
          "Concevoir une application mobile pratique pour aider l’utilisateur à organiser plus facilement ses repas et ses courses.",
      },
      {
        title: "Problème",
        content:
          "La planification des repas demande du temps et implique souvent plusieurs actions séparées : chercher des idées, noter les ingrédients et préparer les achats.",
      },
      {
        title: "Solution",
        content:
          "Centraliser la découverte de recettes, la génération de listes d’ingrédients, le partage par SMS et la localisation d’un supermarché à proximité dans une seule application.",
      },
    ],
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
