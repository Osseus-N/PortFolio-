import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/characterpage.css';
import norli_sprite from'../assets/norlitoChar.png';
import yuri_sprite from'../assets/yuriChar.png';

export default function ChooseYourCharacter(){
  return (
    <div className="character-select-container">
      <div className="title-section">
        SELECT YOUR CHARACTER
      </div>

      <div className="characters-section">

      <div className="character-card">
              <span className="character-name">Norlito</span>

        <div className="sprite-placeholder">
        <Link to="/dashboard" className="character-link">
          <div className="sprite" 
            style={{ backgroundImage: `url(${norli_sprite})` }}>   
          </div>
        </Link>
      </div>
      </div>

      <div className="character-card">
                <span className="character-name">Yuri</span>

        <div className="sprite-placeholder">
        <Link to="/dashboard" className="character-link">
          <div className="sprite"
              style={{ backgroundImage: `url(${yuri_sprite})` }}>   
          </div>
        </Link>
        </div>
        </div>

      </div>

    </div>
  );
}
 