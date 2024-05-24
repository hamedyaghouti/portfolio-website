import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  zustand,
  tailwind,
  nodejs,
  git,
  figma,
  hastnama,
  podro,
  railway,
  hooshmand,
  carrent,
  jobit,
  tripguide,
  kankashTestimonial,
  amerioonTestimonial,
} from "@/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    // title: "React Native Developer",
    title: "Frontend Mentor",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Zustand",
    icon: zustand,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front End Developer, React",
    company_name: "Bank Saderat Iran",
    icon: hooshmand,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - March 2024",
    points: [
      "Utilized JavaScript to develop and integrate a form-builder module into the CRM project.",
      "Employed React for the frontend and NestJS for the backend to create a new HR-automation system, streamlining the employee evaluation process.",
      "Led the migration of the Sepehryar project to a modern technology stack using React, significantly enhancing the customer experience.",
      "Collaborated closely with another developer to design and develop a Call-Center application using Electron, facilitating efficient customer support reporting for Sapp.",
      "Redesigned the Hooshmand Sepehr website to enhance its visual appeal and user experience, contributing to increased user engagement.",
      "Identified and rectified flaws in application flows within the Sapp application, resulting in a notable enhancement of the user experience.",
      "Developed the Sima project utilizing React and WebSocket technology.",
      "Collaborated with another developer to develop Tosigh project using Next.js.",
    ],
  },
  {
    title: "Full Stack Developer, React, Express",
    company_name: "The Railways of Islamic Republic of Iran",
    icon: railway,
    // iconBg: "#E6DEDD",
    iconBg: "white",
    date: "Sep 2020 - Sep 2022",
    points: [
      "Utilized React and ExpressJS to design and implement a robust warehousing application, enhancing inventory management efficiency and accuracy.",
      "Solely developed the Kazvin application, using React and ExpressJS to streamline the registration process for railway track destruction and maintenance activities, ensuring regulatory compliance and operational efficiency.",
    ],
  },
  {
    title: "Front End Developer, React",
    company_name: "Podro co",
    icon: podro,
    iconBg: "#383E56",
    date: "April 2020 - Sep 2020",
    points: [
      "Collaborated with other developers to redesign and implement a DMS panel using React, resulting in a 50% increase in customer adoption of the new feature.",
      "Created a comprehensive UI library to facilitate the development of reusable components, enhancing efficiency and consistency across projects.",
    ],
  },
  {
    title: "Front End Developer, React",
    company_name: "Hastnama Creative Solutions",
    icon: hastnama,
    iconBg: "#383E56",
    date: "Sep 2019 - 2020 April",
    points: [
      "Implemented Abr-Amad cloud computing website using jQuery.",
      "Collaborated in the development of the Hastnama website using React, ensuring high-quality performance and user interface design.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "M Kankash",
    designation: "CTO",
    company: "BSI",
    image: kankashTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hamed does.",
    name: "S Amerioon",
    designation: "PM",
    company: "BSI",
    image: amerioonTestimonial,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
