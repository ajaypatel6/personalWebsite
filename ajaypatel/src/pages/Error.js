import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="languages-container">
      <h1>bad link</h1>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
    </div>
  );
};

export default Error;
