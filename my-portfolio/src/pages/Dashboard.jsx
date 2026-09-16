import React, { useState } from "react";
import "../styles/dashboard.css";
import ChooseYourCharacter from "./ChooseYourCharacter";

export default function Dashboard() {

    const [selectedCharacter, setSelectedCharacter ] = useState('Norlito');
  return (
    <div className="spa-container">
      {/* Top Fixed Navigation */}
      <nav className="spa-navbar">
        <div className="nav-title">PLAYER ONE</div>
        <ul className="nav-links">
          <li><a href="#overview">OVERVIEW</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT ME</a></li>
        </ul>
      </nav>

      {/* Hero Section with Mario Background */}
      <header className="hero-section">
        <div className="hero-content">
            <h1 className="hero-name">NORLITO</h1>
            <p className="hero-subtitle">GAME DEVELOPER & DESIGNER</p>
        </div>  

        <div className="character">
            <ChooseYourCharacter onSelectCharacter={(char) => setSelectedCharacter(char)} />
        </div>
        </header>
    
    
      {/* Main Content Area */}
      <main className="spa-content">
        {/* Section 1: Overview & Skills */}
        <section id="overview" className="spa-section">
          <h2 className="section-title">OVERVIEW</h2>
          <div className="pixel-panel">
            <p>Welcome to my portfolio world! I specialize in full-stack development and pixel-art game design.</p>
          </div>

          <h3 className="subsection-title">SKILLS & TOOLKIT</h3>
          <div className="skill-tags">
            <span className="tag">REACT</span>
            <span className="tag">JAVASCRIPT</span>
            <span className="tag">CSS GRID</span>
            <span className="tag">PIXEL ART</span>
            <span className="tag">NODE.JS</span>
          </div>
        </section>

        {/* Section 2: Projects */}
        <section id="projects" className="spa-section">
          <h2 className="section-title">PROJECTS</h2>
          <div className="project-grid">
            <div className="pixel-panel project-card">
              <h3>STAGE 1: PIXEL RPG</h3>
              <p>A retro-themed dashboard built with React and custom CSS pixel pipelines.</p>
            </div>
            <div className="pixel-panel project-card">
              <h3>STAGE 2: PLATFORMER ENGINE</h3>
              <p>A lightweight 2D game loop built using HTML5 Canvas and React state.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Contact Me */}
        <section id="contact" className="spa-section">
          <h2 className="section-title">CONTACT ME</h2>
          <div className="pixel-panel">
            <p>Ready to start a new quest or collaborate on a project?</p>
            <a href="mailto:your-email@example.com" className="contact-btn">
              SEND MESSAGE
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}