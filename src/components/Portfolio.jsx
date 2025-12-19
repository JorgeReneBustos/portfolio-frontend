import React from 'react';

export default function Portfolio(props) {
  const { projects = [] } = props;

  return (
    <section id="portfolio" className="section section--portfolio reveal delay-400">
      <div className="container">
        <h2>PORTFOLIO</h2>
        <div className="projects">{projects.map((p, i) => {
          const tags = p.tags || [];
          const type = p.type || p.description || '';
          const live = p.live_url || p.demo || '#';
          const repo = p.repo_url || p.github || '#';
          return (
            <article key={i} className="card project-card">
              <div
                className="project-thumb"
                role="img"
                aria-label={`${p.title} thumbnail`}
                style={{ backgroundImage: `url(${p.image ? p.image : '/project-' + i + '.jpg'})` }}
              ></div>
              <h4>{p.title}</h4>
              <p className="muted">{type}</p>
              <div className="project-tags">{tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              <div className="buttons">
                <a href={live} target="_blank" rel="noreferrer" className="btn">Live</a>
                <a href={repo} target="_blank" rel="noreferrer" className="btn">Repo</a>
              </div>
            </article>
          );
        })}</div>

        <div className="cta-card">
          <h3>¿Querés que te arme tu web?</h3>
          <p>Hacemos una web moderna que se vea bien y convierta.</p>
          <a className="btn" href="mailto:renebustos2382@gmail.com">Contactarme</a>
        </div>
      </div>
    </section>
  );
}
