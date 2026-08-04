import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundAmbience from "@/components/BackgroundAmbience";
import IntroReveal from "@/components/IntroReveal";

export default function Home() {
  return (
    <>
      <IntroReveal />
      <ScrollProgress />
      <BackgroundAmbience />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
