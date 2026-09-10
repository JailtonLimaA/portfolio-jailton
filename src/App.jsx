import Header from "./components/Header";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWork";
import DesignSystems from "./sections/DesignSystems";
import CaseStudies from "./sections/CaseStudies";
import Process from "./sections/Process";
import About from "./sections/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SelectedWork />
        <DesignSystems />
        <CaseStudies />
        <Process />
        <About />
      </main>

      <Footer />
    </>
  );
}

export default App;
