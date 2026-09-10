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
        </div>

        <div className="case-image" style={{ objectFit: "cover" }}>
          <img src={item.image} alt={item.title} />
        </div>
      </article>
    </Reveal>
  );
}

export default CaseCard;
