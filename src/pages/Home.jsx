import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import barberiaImg from "../assets/barberia.png";
import businessImg from "../assets/businees.png";
import reactAppImg from "../assets/reactApp.png";

const projects = [
  {
    title: "El Barón Barbería",
    description: "Landing page comercial desarrollada en React para una barbería real.",
    demo: "https://el-baron-barberia.vercel.app/",
    github: "https://github.com/JorgeReneBustos/el-baron-barberia",
    image: barberiaImg
  },
  {
    title: "Business Dashboard",
    description: "Dashboard frontend con componentes reutilizables y estructura modular.",
    demo: "https://business-dashboard-phi-ten.vercel.app/",
    github: "https://github.com/JorgeReneBustos/business-dashboard",
    image: businessImg
  },
  {
    title: "React Frontend App",
    description: "Aplicación para practicar fundamentos de React.",
    demo: "https://react-frontend-app-tau.vercel.app/",
    github: "https://github.com/JorgeReneBustos/react-frontend-app",
    image: reactAppImg
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero
          name={"JORGE BUSTOS"}
          role={"Frontend Developer Jr"}
          description={"Interfaces modernas, responsivas y orientadas al usuario."}
          certificateLink={"https://validator.centrodeelearning.com/validator/93f0a6dc-ba44-4168-be4e-9499c0838f46"}
          socials={[
            { href: 'https://www.linkedin.com/in/jorgerenebustos/', label: 'LinkedIn', Icon: FaLinkedin },
            { href: 'https://github.com/JorgeReneBustos', label: 'GitHub', Icon: FaGithub },
            { href: 'https://www.facebook.com/jorge.rene.bustos.2025/', label: 'Facebook', Icon: FaFacebook }
          ]}
          skills={["HTML5","CSS3","JavaScript","React","Git","GitHub"]}
        />

        <About />
        <Resume />
        <Portfolio projects={projects} />
      </main>
      <Footer />
    </>
  );
}
 
