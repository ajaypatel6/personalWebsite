import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import projects from "../data/data";

const SingleProject = ({ items }) => {
  const { name } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [project, setProject] = React.useState(items);

  React.useEffect(() => {
    let projectData = items.filter((project) => project.name === name);
    console.log(projectData);

    setProject(projectData);
    console.log(project);
  }, [name]);

  return (
    <>
      <div className="project-center">
        {items.map((project) => {
          if (project.name === name) {
            const {
              id,
              name,
              technology,
              github,
              image,
              text,
              longtext,
              longtech,
              longpics1,
              longpics2,
              longpics3,
              longpics4,
              longpics5,
              mantispic1,
              mantispic2,
              mantispic3,
              mantispic4,
              mantispic5,
            } = project;
            return (
              <article key={id} className="project-item">
                <div className="item-info">
                  <Link to="/" className="btn filter-btn">
                    back home
                  </Link>
                  <header>
                    <h4>{name}</h4>

                    {/* <img src={mainLogo} alt={github} className="smaller" /> */}
                  </header>
                  <h4 className="item-text">{longtext}</h4>
                  <p>{longtech}</p>
                  <img src={mantispic1} className="mantis-img" />
                  <img src={mantispic2} className="mantis-img" />
                  <img src={mantispic3} className="mantis-img" />
                  <img src={mantispic4} className="mantis-img" />
                  <img src={mantispic5} className="mantis-img" />
                  <div className="images-container">
                    <img src={longpics1} className="project-img" />
                    <img src={longpics2} className="project-img" />
                    <img src={longpics3} className="project-img" />
                    <img src={longpics4} className="project-img" />
                    <img src={longpics5} className="project-img" />
                  </div>{" "}
                </div>
              </article>
            );
          }
        })}
      </div>
    </>
  );
};

export default SingleProject;
