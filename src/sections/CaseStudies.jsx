import SectionTitle from "../components/SectionTitle";
import CaseCard from "../components/CaseCard";
import { caseStudies } from "../data/portfolio";

function CaseStudies() {
  return (
    <section className="dark-section case-section">
      <div className="container">
        <SectionTitle light>Case studies</SectionTitle>

        <div className="case-list">
          {caseStudies.map((item, index) => (
            <CaseCard key={item.title} item={item} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
