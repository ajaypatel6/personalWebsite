import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Description from "./components/Description";
import Languages from "./components/Languages";
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
      <Languages></Languages>
      <Technologies
        filterItems={filterItems}
        technologies={technologies}
      ></Technologies>
      <Project items={projects}></Project>
      NEED some SPACE here
      <Footer></Footer>
    </>
  );
}

export default App;
