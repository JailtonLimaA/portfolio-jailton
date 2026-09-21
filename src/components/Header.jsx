import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#home", id: "home" },
  { label: "Trabalhos", href: "#work", id: "work" },
  { label: "Sobre", href: "#about", id: "about" },
  { label: "Contato", href: "#contact", id: "contact" },
];

const roles = ["UX/UI Designer", "Product Designer", "Design Systems"];

function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isNavigating = useRef(false);
  const scrollEndTimer = useRef(null);

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const detectSection = () => {
    const work = document.getElementById("work");
    const about = document.getElementById("about");
    const contact = document.getElementById("contact");

    /*
      Ponto de leitura da navegação.

      88px = altura aproximada do header.
      25% da tela = faz a troca acontecer um pouco
      depois que a seção entra na tela.
    */
    const position = window.scrollY + 88 + window.innerHeight * 0.25;

    let current = "home";

    if (work && position >= work.offsetTop) {
      current = "work";
    }

    if (about && position >= about.offsetTop) {
      current = "about";
    }

    if (contact && position >= contact.offsetTop) {
      current = "contact";
    }

    // Garante contato ativo quando chegar ao final
    const reachedBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10;

    if (reachedBottom) {
      current = "contact";
    }

    setActiveSection(current);
  };

  useEffect(() => {
    const handleScroll = () => {
      /*
        Se o scroll foi provocado pelo clique da nav,
        não deixamos o scroll spy sobrescrever a opção clicada.
      */
      if (isNavigating.current) {
        clearTimeout(scrollEndTimer.current);

        scrollEndTimer.current = setTimeout(() => {
          isNavigating.current = false;
          detectSection();
        }, 150);

        return;
      }

      detectSection();
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    detectSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollEndTimer.current);
    };
  }, []);

  const handleNavigation = (event, id) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) return;

    setActiveSection(id);
    setOpen(false);

    isNavigating.current = true;

    window.history.replaceState(null, "", `#${id}`);

    const headerOffset = 96;

    const targetPosition =
      section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    clearTimeout(scrollEndTimer.current);

    scrollEndTimer.current = setTimeout(() => {
      isNavigating.current = false;
      detectSection();
    }, 150);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a
          href="#home"
          className="brand"
          onClick={(event) => handleNavigation(event, "home")}
        >
          <div className="brand-logo">
            <img src="/images/logo-jailton.svg" alt="Logo Jailton Lima" />
          </div>

          <div className="brand-info">
            <strong>Jailton Lima</strong>

            <div className="brand-role">
              <span key={roles[roleIndex]}>{roles[roleIndex]}</span>
            </div>
          </div>
        </a>

        {/* DESKTOP */}
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={activeSection === link.id ? "active" : ""}
              onClick={(event) => handleNavigation(event, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <nav className="mobile-nav" aria-label="Navegação mobile">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={activeSection === link.id ? "active" : ""}
              onClick={(event) => handleNavigation(event, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
