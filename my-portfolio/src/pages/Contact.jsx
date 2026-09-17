function Contact({ email, message }) {
  return (
    <section id="contact" className="spa-section">
      <h2 className="section-title">CONTACT ME</h2>
      <div className="pixel-panel">
        <p>{message}</p>
        <a href={`mailto:${email}`} className="contact-btn">
          SEND MESSAGE
        </a>
      </div>
    </section>
  );
}

export default Contact;