import React from "react";

const Technologies = ({ filterItems, technologies }) => {
  console.log(technologies);
  return (
    <div className="btn-container">
      {technologies.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Technologies;
