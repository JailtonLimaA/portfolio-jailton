import Reveal from "./Reveal";

function CaseCard({ item, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="case-card">
        <div className="case-content">
          <h3>{item.title}</h3>

          <p>{item.description}</p>

          {item.tags && (
            <div className="tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}

          {item.link && (
            <a href={item.link} className="case-link">
              Ver case
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>

        <div className="case-image">
          <img src={item.image} alt={item.title} />
        </div>
      </article>
    </Reveal>
  );
}

export default CaseCard;
