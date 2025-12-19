import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const sections = ['home', 'about', 'resume', 'portfolio'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' }
  ];

  return (
    <header className={`header header--sticky ${open ? 'is-open' : ''}`}>
      <div className="container header-inner">
        <div className="brand">
          <a href="#home" className="brand-link" onClick={(e)=>{e.preventDefault(); setOpen(false); const el=document.getElementById('home'); if(el){ const y = el.getBoundingClientRect().top + window.scrollY - 12; window.scrollTo({top: y, behavior: 'smooth'}); }}}>JORGE BUSTOS</a>
        </div>

        <nav className={`nav ${open ? 'nav-open' : ''}`} aria-label="main navigation">
          <ul>
            {navItems.map((n) => (
              <li key={n.id} className={active === n.id ? 'active' : ''}>
                <a href={`#${n.id}`} onClick={(e)=>{e.preventDefault(); setOpen(false); const el=document.getElementById(n.id); if(el){ const y = el.getBoundingClientRect().top + window.scrollY - 12; window.scrollTo({top: y, behavior: 'smooth'}); }}} aria-current={active === n.id ? 'page' : undefined}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a className="icon-link" href="https://www.linkedin.com/in/jorgerenebustos/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="icon-link" href="https://github.com/JorgeReneBustos" target="_blank" rel="noreferrer">GitHub</a>

          <button
            className="hamburger"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
