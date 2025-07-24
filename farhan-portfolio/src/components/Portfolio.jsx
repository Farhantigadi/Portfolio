import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skill from "./Skill";
import Skills from "./Skills";

function Portfolio() {
    return (  
        <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
        </div>
    );
}

export default Portfolio;