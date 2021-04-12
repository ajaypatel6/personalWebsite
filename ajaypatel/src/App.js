import React, { useState, useEffect } from "react";

import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Description from "./components/Description";

import "./index.css";

import android_projects from "./data/data";

function App() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading projects...</h1>
      </section>
    );
  }

  return (
    <>
      <Header />
      <Description></Description>
      <Projects></Projects>

      <Footer />
    </>
  );
}

export default App;
