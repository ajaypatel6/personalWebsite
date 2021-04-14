import React from "react";
import Languages from "./Languages";

const Description = () => {
  return (
    <>
      <div className="description-container">
        <h2 className="name-color">Ajay Patel</h2>
        <p>
          Currently located in Hamilton, Ontario and Graduated in October 2020
          with a Computer Science Degree
        </p>
        <p>I have interests in Gaming, Fitness and Learning</p>
        <p>
          Looking forward to build my skills to becoming a Full-Stack Developer
          and dive into the next problem
        </p>
      </div>
      <Languages></Languages>
    </>
  );
};

export default Description;
