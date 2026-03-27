import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(224,224,224,0.08) 30%, rgba(224,224,224,0.08) 70%, transparent)" }} />
        <Projects />
        <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(224,224,224,0.08) 30%, rgba(224,224,224,0.08) 70%, transparent)" }} />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
