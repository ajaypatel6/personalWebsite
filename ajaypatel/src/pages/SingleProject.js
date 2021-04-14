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
    const selectedProject = projectData;

    setProject(projectData);
    console.log(project);
  }, [name]);

  return (
    <>
      <div className="section-center">{name}</div>

      <Link to="/" className="btn filter-btn">
        back home
      </Link>
    </>
  );
};

export default SingleProject;
