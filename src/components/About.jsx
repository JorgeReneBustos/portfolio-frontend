import React from 'react';
import profileImg from '../assets/Jorge_Bustos.jpg';

export default function About(){
  return (
    <section id="about" className="section section--about reveal delay-200">
      <div className="container about-inner">
        <div className="about-text">
          <small className="eyebrow">DISCOVER</small>
          <h2>ABOUT</h2>
          <p className="muted">renebustos2382@gmail.com</p>
          <p>
            Desarrollador Frontend Jr enfocado en crear interfaces limpias, responsivas y fáciles de usar. Experiencia práctica con HTML5, CSS3, JavaScript y React, aplicando buenas prácticas, componentes reutilizables y control de versiones con Git/GitHub. Actualmente me estoy formando en el programa Professional Front End Developer en UTN y construyendo proyectos reales para sumar experiencia.
          </p>
          <div className="meta">San Miguel, Buenos Aires, Argentina</div>
        </div>
        <div className="about-image" aria-hidden>
          <div className="portrait">
            <img src={profileImg} alt="Jorge René Bustos" onError={(e)=>{e.target.onerror=null; e.target.src='/profile.svg'}} />
          </div>
        </div>
      </div>
    </section>
  );
}
