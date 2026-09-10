import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <SectionTitle>Sobre</SectionTitle>

        <div className="about-grid">
          <Reveal>
            <div className="about-image-wrapper">
              <div className="about-shape" />

              <img
                src="/images/profile.png"
                alt="Jailton Lima"
                className="about-image"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="about-content">
              <h3>Não penso apenas em telas.</h3>

              <p>
                Para mim, uma boa experiência começa muito antes da interface.
                Procuro compreender o contexto, as pessoas e os objetivos por
                trás de cada produto.
              </p>

              <p>
                Como Product Designer, atuo entre UX e UI explorando pesquisa,
                fluxos, arquitetura da informação, prototipação e construção de
                interfaces.
              </p>

              <p>
                Também gosto de aproximar design e tecnologia, utilizando
                desenvolvimento front-end como apoio para transformar ideias em
                experiências reais.
              </p>

              <div className="about-tags">
                <span>Product Design</span>
                <span>UX Research</span>
                <span>UX/UI</span>
                <span>Prototipação</span>
                <span>Design System</span>
                <span>Front-end</span>
              </div>

              <div className="tools">
                <strong>Ferramentas que uso</strong>

                <div className="tool-logo-line1">
                  <img src="/images/f.svg" alt="Figma" />
                  <img src="/images/ps.svg" alt="Photoshop" />
                  <img src="/images/ai.svg" alt="Illustrator" />
                  <img src="/images/t.svg" alt="trello" />
                </div>
                <div className="tool-logo-line1">
                  <img src="/images/g.svg" alt="git" />
                  <img src="/images/v.svg" alt="css" />
                  <img src="/images/h.svg" alt="html" />
                  <img src="/images/c.svg" alt="css" />
                  <img src="/images/r.svg" alt="react" />
                </div>
                <div className="tool-logo-line1">
                  <img src="/images/cg.svg" alt="chatgpt" />
                  <img src="/images/l.svg" alt="lovable" />
                  <img src="/images/cc.svg" alt="claude" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
