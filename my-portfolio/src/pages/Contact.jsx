import githubIcon from "../assets/github/github-normal.png";
import facebookIcon from "../assets/facebook_icon_bg.png";
import gmailIcon from "../assets/google_icon_bg.png";

import "../styles/contact.css";

function Contact({ contact }) {
  return (
    <section id="contact" className="spa-section">
      <h2 className="section-title">CONTACT ME</h2>

      <div className="pixel-panel contact-panel">
        <p>Ready to start a new quest or collaborate on a project?</p>

        <a href={`mailto:${contact.email}`} className="contact-btn">
          SEND MESSAGE
        </a>

        <div className="social-links">
          {contact.github && (
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={githubIcon} alt="GitHub profile" />
            </a>
          )}
          {contact.facebook && (
            <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={facebookIcon} alt="facebook profile" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
} 

export default Contact;