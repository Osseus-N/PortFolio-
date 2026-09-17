import React, { useState } from "react";
import "../styles/dashboard.css";
import ChooseYourCharacter from "./ChooseYourCharacter";
import Overview from "./Overview"
import Projects from './Projects';
import Contact from './Contact';
import {characters} from "../data/characters.js";

export default function Dashboard() {

    const [selectedCharacter, setSelectedCharacter ] = useState('norlito');
    const character = characters[selectedCharacter];

  return (
    <div className="spa-container">

      <nav className="spa-navbar">
        <div className="nav-title">PLAYER ONE</div>
        <ul className="nav-links">
          <li><a href="#overview">OVERVIEW</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT ME</a></li>
        </ul>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
            <h1 className="hero-name">{character.name}</h1>
            <p className="hero-subtitle">{character.role}</p>
        </div>  

        <div className="character">
            <ChooseYourCharacter onSelectChar={setSelectedCharacter} />
        </div>
        </header>
        
      <main className="spa-content">
      <div className="Overview">
          <Overview skills={character.skills} />
      </div>
      
      <div>
          <Projects projects={character.projects} />
       </div>

        {/* Section 3: Contact Me */}
      <div>
          <Contact contact={character.contact} />
      </div>
      </main>
    </div>
  );
}