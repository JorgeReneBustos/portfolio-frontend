export default function ProjectCard({ title, description, demo, github, image }) {
  return (
    <article className="card project-card reveal">
      <img
        src={image || '/project-0.jpg'}
        alt={`${title} thumbnail`}
        className="project-thumb"
        onError={(e) => { e.currentTarget.src = '/project-0.jpg'; }}
      />
      <div className="card-body">
        <h3>{title}</h3>
        <p className="muted">{description}</p>
        <div className="buttons">
          <a href={demo} target="_blank" rel="noreferrer" className="btn">Demo</a>
          <a href={github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
        </div>
      </div>
    </article>
  );
}
