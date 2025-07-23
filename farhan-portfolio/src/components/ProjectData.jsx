import bankingImg from "../assets/digital-mobile-banking-vector-p.jpg";
import journalImg from "../assets/journalP.avif";

const ProjectData = [
  {
    id: "banking",
    title: "Banking App",
     description: "A full-featured digital banking application built using React for the frontend and Spring Boot for the backend. This project replicates core banking functionalities such as user registration, login with JWT authentication, account balance check, fund transfer, and loan application. It ensures role-based access control where admins can manage and approve user loan requests. The application follows a layered architecture with clean separation of concerns, RESTful APIs, and secure JWT token validation. Built with MySQL for persistent storage and includes validations, error handling, and mobile responsiveness to deliver a seamless user experience.",
    image: bankingImg,
    github: "https://github.com/Farhantigadi/BankingApp"
  },
  {
    id: "journal",
    title: "Journal App",
    description: "A personal journaling platform developed with React and Spring Boot that allows users to securely write, manage, and reflect on their daily thoughts. Users can register and log in with JWT-secured authentication, create journal entries, view or delete past entries, and track their emotional well-being over time. The frontend features a clean, minimal UI with rich-text input, while the backend uses a robust RESTful API with MySQL integration for data persistence. The app focuses on user privacy, responsive design, and modular architecture, making it ideal for everyday personal use.",
    image: journalImg,
    github: "https://github.com/Farhantigadi/JournalApp"
  }
];

export default ProjectData;