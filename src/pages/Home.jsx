import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const projects = [
  {
    title: "El Barón Barbería",
    description: "Landing page comercial desarrollada en React para una barbería real.",
    demo: "https://el-baron-barberia.vercel.app/",
    github: "https://github.com/JorgeReneBustos/el-baron-barberia"
  },
  {
    title: "Business Dashboard",
    description: "Dashboard frontend con componentes reutilizables y estructura modular.",
    demo: "https://business-dashboard-phi-ten.vercel.app/",
    github: "https://github.com/JorgeReneBustos/business-dashboard"
  },
  {
    title: "React Frontend App",
    description: "Aplicación para practicar fundamentos de React.",
    demo: "https://react-frontend-app-tau.vercel.app/",
    github: "https://github.com/JorgeReneBustos/react-frontend-app"
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="projects">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
