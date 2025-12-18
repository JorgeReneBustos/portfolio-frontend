export default function ProjectCard({ title, description, demo, github }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="buttons">
        <a href={demo} target="_blank">Demo</a>
        <a href={github} target="_blank">GitHub</a>
      </div>
    </div>
  );
}
