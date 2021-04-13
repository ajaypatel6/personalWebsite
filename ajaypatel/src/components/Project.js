import React from "react";
import mainLogo from "../images/github.png";

const Project = ({ items }) => {
  return (
    <>
      <div className="section-center">
        {items.map((project) => {
          const { id, name, technology, github, image, text } = project;
          return (
            <article key={id} className="menu-item">
              <img src={image} alt={name} className="photo" />

              <div className="item-info">
                <header>
                  <a href={github}>
                    <h4 className="filter-btn">{name}</h4>
                    {/* <img src={mainLogo} alt={github} className="smaller" /> */}
                  </a>

                  <h4 className="price"> {technology}</h4>
                </header>
                <p className="item-text">{text}</p>
                <h4>PIX for tech</h4>
                <button className="btn"> SEE MORE </button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Project;
