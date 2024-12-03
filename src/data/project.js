// ripple - project
import registrationPage from "../../public/images/project-images/chat-app/registration.png";
import loginPage from "../../public/images/project-images/chat-app/login-page.png";
import messagePage from "../../public/images/project-images/chat-app/message-page.png";
import friendPage from "../../public/images/project-images/chat-app/friend-requst-page.png";
import groupPage from "../../public/images/project-images/chat-app/group-page.png";
// orebi ecommarce
import homePage from "../../public/images/project-images/orebi-ecommarce/home.png";
import shopPage from "../../public/images/project-images/orebi-ecommarce/shop.png";
import paymentPage from "../../public/images/project-images/orebi-ecommarce/payment.png";
// coding academy
import homeSction from "../../public/images/project-images/coding-academy/home.png";
import featuredCourseSction from "../../public/images/project-images/coding-academy/featured-course.png";
import seminerSction from "../../public/images/project-images/coding-academy/seminer.png";
import mentorsSction from "../../public/images/project-images/coding-academy/mentors.png";
import testimonialsSction from "../../public/images/project-images/coding-academy/testimonials.png";


export const projects = [
  {
    name: "Ripple - Chat Web App",
    description:
      "A modern chat app with real-time messaging, built with React, Redux, Tailwind CSS, and Firebase. Enjoy features like Google login, friend management, group chats, and rich media messaging for a seamless and enjoyable chat experience.",
    technologys: ["Tailwind", "React JS", "Redux", "Firebase"],
    images: [registrationPage, loginPage, messagePage, friendPage, groupPage],
    preview: "https://ripple-chatting-app.vercel.app/",
    github: "https://github.com/ahmedshantodev/Ripple-ChattingApp",
    state: "complate",
  },

  {
    name: "Codding Academy Landing page",
    description:
      "Fulllstack social media website called 'ECHO Chat App'. I used React.js with TypeScript for empowering lightning-fast scalable web application.",
    technologys: ["Aceternity UI", "Tailwind", "Next JS", "Typescript",],
    images: [homeSction, featuredCourseSction, seminerSction, mentorsSction, testimonialsSction],
    preview: "",
    github: "",
    state: "complate",
  },
  {
    name: "Orebi - ecommarce",
    description:
      "Frontend design of a e-commerce website called 'Orebi E-commerce'. I used React.js for empowering lightning-fast scalable frontend web application.",
    technologys: ["Tailwind", "React JS"],
    images: [homePage, shopPage, paymentPage],
    preview: "https://orebi-ecommarce.vercel.app/",
    github: "https://github.com/ahmedshantodev/orebi-ecommarce",
    state: "complate",
  },
  {
    name: "Ripple - Chat Web App",
    description:
      "Fulllstack social media website called 'ECHO Chat App'. I used React.js with TypeScript for empowering lightning-fast scalable web application.",
    technologys: ["Tailwind", "React JS", "Redux", "Firebase"],
    images: [
      "https://somor-mk.vercel.app/images/projects/echochat.jpg",
      "https://somor-mk.vercel.app/images/projects/echochat.jpg",
      "https://somor-mk.vercel.app/images/projects/echochat.jpg",
      "https://somor-mk.vercel.app/images/projects/echochat.jpg",
    ],
    preview: "",
    github: "",
  },
];
