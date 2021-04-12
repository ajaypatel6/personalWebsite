import React from "react";

const Projects = () => {
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h2>
              My Projects
              <div className="underline"></div>
            </h2>
          </div>
          <div>
            <button className="btn">Web</button>
          </div>
          <div>
            <button className="btn">Android</button>
          </div>
          <div>
            <button className="btn">Software Dev</button>
          </div>
          <div>
            <button className="btn">Python</button>
          </div>
          <div>
            <button className="btn">School projects/ Other</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
