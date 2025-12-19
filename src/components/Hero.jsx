import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import profileImg from '../assets/Jorge_Bustos.jpg';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiGithub } from 'react-icons/si';

const SKILL_ICONS = {
  HTML5: SiHtml5,
  CSS3: SiCss3,
  JavaScript: SiJavascript,
  React: SiReact,
  Git: SiGit,
  GitHub: SiGithub
};

export default function Hero({
  name = 'Tu Nombre',
  role = 'Junior Frontend Developer',
  description = 'Me especializo en construir interfaces limpias y accesibles. Recién egresado con proyectos individuales y ganas de aprender en equipo.',
  certificateLink = '#',
  socials = [
    { href: 'https://www.linkedin.com/in/jorgerenebustos/', label: 'LinkedIn', Icon: FaLinkedin },
    { href: 'https://github.com/JorgeReneBustos', label: 'GitHub', Icon: FaGithub },
    { href: 'https://www.facebook.com/jorge.rene.bustos.2025/', label: 'Facebook', Icon: FaFacebook }
  ],
  skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git', 'GitHub']
}) {
  return (
    <section id="home" className="hero hero--profile reveal reveal--large">
      <div className="avatar" aria-hidden>
        <img
          src={profileImg}
          alt={`${name} - perfil`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => { e.target.onerror = null; e.target.src = '/profile.svg'; }}
        />
      </div>

      <div className="intro">
        <h1 className="hero-title">
          {name.split(' ').slice(0, -1).join(' ')} <span className="hero-title-surname">{name.split(' ').slice(-1).join(' ')}</span>
        </h1>
        <p style={{ marginTop: 8, fontWeight: 600, color: 'var(--color-muted)' }}>{role}</p>
        <p style={{ marginTop: 12, maxWidth: 720 }}>{description}</p>

        <div className="buttons">
          <a className="btn" href={certificateLink} target="_blank" rel="noreferrer">Ver certificado</a>
          <a className="btn" href="#projects">Mis proyectos</a>
        </div>

        <div style={{ marginTop: 16 }} className="skills">
          {skills.map((s) => {
            const Icon = SKILL_ICONS[s];
            return (
              <span className="skill" key={s} title={s}>
                {Icon ? <Icon style={{ width: 18, height: 18 }} /> : null}
                <span style={{ marginLeft: 8 }}>{s}</span>
              </span>
            );
          })}
        </div>

        <div style={{ marginTop: 18 }} className="socials" aria-label="redes sociales">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label}>
              <s.Icon style={{ width: 18, height: 18 }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
