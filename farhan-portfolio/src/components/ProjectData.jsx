import bankingImg from "../assets/digital-mobile-banking-vector-p.jpg";
import journalImg from "../assets/journalP.avif";
import jobimage from "../assets/jobP.jpg"

const ProjectData = [
  {
    id: "banking",
    title: "Banking App",
    description: `A full-featured digital banking system developed using Java (Spring Boot) and React, replicating real-world banking functionalities.

Implemented JWT-based authentication, role-based access control, and secure REST APIs.

Users can register, log in, check balance, transfer funds, and apply for loans; Admins can approve or manage loans.

Followed layered architecture with MySQL for persistence and Spring Security for endpoint protection.

Integrated GitHub Actions for CI, SonarCloud for code quality, and documented APIs using Swagger (OpenAPI).`,
    image: bankingImg,
    github: "https://github.com/Farhantigadi/BankingApp"
  },
  {
    id: "journal",
    title: "Journal App",
    description: `A secure journaling platform created with  Spring Boot, focusing on privacy.

Users can sign up, log in (secured via JWT), write journal entries, view/edit/delete past entries.

Backend supports role-based access where users manage their own entries, and Admins handle user operations.

REST APIs are tested with Postman, documented via Swagger, and integrated with SonarCloud and GitHub Actions for CI.`,
    image: journalImg,
    github: "https://github.com/Farhantigadi/JournalApp"
  },
   {
    id: "AI-JOBS",
    title: "Job App ",
    description: `KodJobs is a full-stack job search platform built using React, Node.js (Express), and TypeScript. Developed with the help of AI tools like Replit AI, the app fetches real-time job data using a LinkedIn Scraper API from RapidAPI and displays it on the frontend. It uses Drizzle ORM with Neon Database for serverless persistence and features a clean, modular architecture with separate client, server, and shared folders. KodJobs reflects my ability to rapidly build and integrate real-world APIs using modern tools and a vibe-driven development approach.`,
    image: jobimage,
    github: "https://z7zmyl-5000.csb.app/",
   }
];

export default ProjectData;
