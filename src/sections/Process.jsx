import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { processSteps } from "../data/portfolio";

function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <SectionTitle>Como eu trabalho</SectionTitle>

        <Reveal delay={0.1}>
          <p className="process-description">
            Meu processo parte do entendimento do contexto e das pessoas,
            evoluindo através de pesquisa, definição, exploração, prototipação e
            validação.
          </p>
        </Reveal>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <div className="process-item">
                <span>{step.number}</span>

                <h4>{step.title}</h4>

                <p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
