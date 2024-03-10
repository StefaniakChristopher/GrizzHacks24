import { useState } from "react";
import "./App.css";

function Tree({ heroSection }) {
  return (
    <section className="body">
      <img id="diagram" src={heroSection} alt="mrOakland" />
    </section>
  );
}

export default Tree;
