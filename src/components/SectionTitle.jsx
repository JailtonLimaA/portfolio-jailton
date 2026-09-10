import Reveal from "./Reveal";

function SectionTitle({ children, light = false }) {
  return (
    <Reveal>
      <div className={`section-heading ${light ? "light" : ""}`}>
        <h2>{children}</h2>
        <div className="section-line" />
      </div>
    </Reveal>
  );
}

export default SectionTitle;
