import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { designSystems } from "../data/portfolio";

function DesignSystems() {
  return (
    <section className="dark-section">
      <div className="container">
        <SectionTitle light>Design Systems</SectionTitle>

        <Reveal>
          <p className="section-intro light-text">
            Criação e evolução de componentes, padrões e documentação para
            garantir consistência, escalabilidade e eficiência na evolução dos
            produtos.
          </p>
        </Reveal>

        <div className="design-grid">
          {designSystems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <article className="design-card" style={{ objectFit: "contain" }}>
                <img src={item.image} alt={item.title} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DesignSystems;
