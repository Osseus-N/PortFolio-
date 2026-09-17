import React from 'react';
import '../styles/characterpage.css';
import norli_sprite from'../assets/norlitoChar.png';
import yuri_sprite from'../assets/yuriChar.png';

export default function ChooseYourCharacter({onSelectChar}){
  return (
    <div className="character-select-container">
      <div className="title-section">
        SELECT YOUR CHARACTER
      </div>

      <div className="characters-section">

      <div className="character-card">
              <span className="character-name">Norlito</span>

        <div className="sprite-placeholder">
          <div className="sprite" 
            style={{ backgroundImage: `url(${norli_sprite})` }}
            onClick={() => onSelectChar('norlito')}>   
          </div>
      </div>
      </div>

      <div className="character-card">
                <span className="character-name">Yuri</span>

        <div className="sprite-placeholder">
          <div className="sprite"
              style={{ backgroundImage: `url(${yuri_sprite})` }}
              onClick={() => onSelectChar('Norlito')}>      
          </div>
        </div>
        </div>

      </div>

    </div>
  );
}
 