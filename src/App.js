import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import About from "./components/UI/About";
import Company from "./components/UI/Company";
import Education from "./components/UI/Education";
import Skills from "./components/UI/Skills";




function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <>
  <Header />
  <main>
   <Hero />
   <About />
   <Company />
   <Education />
   <Skills />
  </main>
  <Footer />
  </>;
}

export default App;