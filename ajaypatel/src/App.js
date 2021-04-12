import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Description from "./components/Description";
import Technologies from "./components/Technologies";
import Project from "./components/Project";

import Footer from "./components/Footer";

import "./index.css";

import items from "./data/data";
const allTechnologies = [
  "all",
  ...new Set(items.map((item) => item.technology)),
];

function App() {
  const [projects, setProjects] = useState(items);
  const [technologies, setTechnologies] = useState(allTechnologies);

  const filterItems = (technology) => {
    if (technology === "all") {
      setProjects(items);
      return;
    }
    const newItems = items.filter((item) => item.technology === technology);
    setProjects(newItems);
  };

  console.log(technologies);
  return (
    <>
      <Header />
      <Description></Description>
      <h1>
        <div className="title">My Projects</div>
        <div className="underline"></div>
      </h1>
      <Technologies
        filterItems={filterItems}
        technologies={technologies}
      ></Technologies>
      <Project items={projects}></Project>
      Links at bottom? Links at bottom? Links at bottom? Links at bottom?
      <Footer></Footer>
    </>
  );
}

export default App;
