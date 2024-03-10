import "./App.css";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

function App() {
  const [heroSection, setHeroSection] = useState("default");

  return (
    <section className="App">
      <Header heroSection={heroSection} setHeroSection={setHeroSection} />
      <Body heroSection={heroSection} setHeroSection={setHeroSection} />
      <Footer heroSection={heroSection} setHeroSection={setHeroSection} />
    </section>
  );
}

export default App;
