import React from 'react';
import CVViewer from './CVViewer';

const SkillBar = ({ label, value }) => (
  <div className="skillbar">
    <div className="skillbar-info">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="skillbar-track">
      <div className="skillbar-fill" style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

export default function Resume(){
  return (
    <section id="resume" className="section section--resume reveal delay-200">
      <div className="container resume-inner">
        <div style={{ gridColumn: '1 / -1', marginBottom: 24 }}>
          <h2>CURRÍCULUM VITAE</h2>
          <CVViewer src="/Jorge_Rene_Bustos_Frontend_Developer_CV.pdf" height={640} />
        </div>
        <div className="col left">
          <h3>SOFTWARE SKILLS</h3>
          <SkillBar label="HTML5" value={85} />
          <SkillBar label="CSS3" value={80} />
          <SkillBar label="JavaScript" value={70} />
          <SkillBar label="React" value={65} />
          <SkillBar label="Git/GitHub" value={70} />
          <SkillBar label="Vite" value={60} />

          <h4>LANGUAGES</h4>
          <SkillBar label="Spanish" value={100} />
          <SkillBar label="English" value={45} />

          <h4>PERSONAL SKILLS</h4>
          <ul className="list">
            <li>Organización</li>
            <li>Pensamiento analítico</li>
            <li>Trabajo en equipo</li>
            <li>Aprendizaje continuo</li>
          </ul>
        </div>

        <div className="col middle">
          <h3>EXPERIENCE</h3>
          <div className="timeline">
            <div className="item">
              <strong>Fleet Group</strong>
              <p>Analista de Stock / Logística — Experiencia previa</p>
              <p>Control de inventario, análisis de movimientos, seguimiento de stock y soporte operativo con enfoque en datos.</p>
            </div>

            <h4>EDUCATION</h4>
            <div className="item">
              <strong>Professional Front End Developer — UTN</strong>
              <p>Formación práctica en frontend moderno: HTML, CSS, JavaScript, React, estructura de proyectos y buenas prácticas.</p>
            </div>
          </div>
        </div>

        <div className="col right">
          <h3>WHAT CAN I DO?</h3>
          <ul className="list">
            <li>Landing Pages profesionales</li>
            <li>Sitios web para PyMEs</li>
            <li>UI responsive (Mobile First)</li>
            <li>Mejora de performance y SEO básico</li>
            <li>Deploy en Vercel / GitHub Pages</li>
          </ul>

          <h4>WORK STYLE</h4>
          <ul className="list">
            <li>Código limpio y mantenible</li>
            <li>Componentes reutilizables</li>
            <li>Buenas prácticas y estructura</li>
            <li>Enfoque en conversión y claridad</li>
          </ul>

          <h4>HOBBIES & INTERESTS</h4>
          <ul className="list">
            <li>Programación</li>
            <li>Diseño web</li>
            <li>Aprender tecnologías</li>
            <li>Fitness</li>
          </ul>
        </div>
      </div>
    </section>
  );
}