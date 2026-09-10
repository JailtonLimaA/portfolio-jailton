import { companies } from "../data/portfolio";

function LogoMarquee() {
  const logos = [...companies, ...companies];

  return (
    <div className="logo-marquee">
      <div className="logo-track">
        {logos.map((company, index) => (
          <div className="company-logo" key={`${company.name}-${index}`}>
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoMarquee;
