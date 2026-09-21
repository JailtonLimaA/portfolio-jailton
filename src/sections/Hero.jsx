function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* BLOCO PRINCIPAL */}
          <div className="hero-name-area">
            <div className="hero-name-block">
              <span className="hero-eyebrow">Olá, sou</span>

              <h1 className="hero-name">
                <span>Jailton</span>
                <span>Lima</span>
              </h1>
            </div>

            {/* TEXTO LATERAL */}
            <div className="hero-description-wrapper">
              <p className="hero-description">
                Transformo problemas
                <br />
                complexos em
                <br />
                experiências digitais
                <br />
                simples.
              </p>

              <span className="hero-description-line" />
            </div>
          </div>

          {/* EMPRESAS */}
          <div className="company-section">
            <p>Atuando no design e evolução de produtos digitais para:</p>

            <div className="logo-marquee">
              <div className="logo-track">
                {/* Primeiro conjunto */}
                <div className="company-logo">
                  <img src="/images/exmed.svg" alt="Exmed" />
                </div>

                <div className="company-logo">
                  <img src="/images/excelsior.svg" alt="Excelsior Seguros" />
                </div>

                <div className="company-logo">
                  <img src="/images/jofi.svg" alt="Jofi" />
                </div>

                {/* Duplicação para criar o loop infinito */}
                <div className="company-logo" aria-hidden="true">
                  <img src="/images/exmed.svg" alt="" />
                </div>

                <div className="company-logo" aria-hidden="true">
                  <img src="/images/excelsior.svg" alt="" />
                </div>

                <div className="company-logo" aria-hidden="true">
                  <img src="/images/jofi.svg" alt="" />
                </div>
              </div>
              <a href="#work" className="hero-work-link">
                <span className="hero-work-arrow">↓</span>
                <span>Explore meus trabalhos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
