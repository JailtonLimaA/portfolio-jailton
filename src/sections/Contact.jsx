function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <h2>Vamos conversar?</h2>

          <form className="footer-form">
            <input
              type="text"
              placeholder="Escreva a mensagem"
              aria-label="Escreva a mensagem"
            />

            <button type="submit">Enviar</button>
          </form>
        </div>

        <div className="footer-contact">
          <div className="brand-logo">
            <img src="/images/logo-jailton.svg" alt="Logo Jailton Lima" />
          </div>

          <div className="footer-divider" />

          <div className="footer-contact-info">
            <a href="mailto:jailton.llima@gmail.com">jailton.llima@gmail.com</a>

            <a href="tel:+5581995764708">(81) 99576-4708</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>2026 - Jailton Lima</span>

          <span>Designed &amp; built by Jailton Lima</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
