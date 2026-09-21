function UnderConstruction() {
  return (
    <main className="construction-page">
      <a href="/#work" className="construction-back">
        ← Voltar aos projetos
      </a>

      <div className="construction-content">
        <img
          src="/images/construction.png"
          alt="Ilustração de uma página em construção"
          className="construction-image"
        />

        <h1>
          Em construção...
          <br />
        </h1>

        <a href="/#work" className="construction-button">
          Voltar aos projetos
          <span>→</span>
        </a>
      </div>
    </main>
  );
}

export default UnderConstruction;
