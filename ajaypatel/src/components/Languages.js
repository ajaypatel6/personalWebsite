import React from "react";

import java from "../images/techImages/java.png";
import kotlin from "../images/techImages/kotlin.png";
import firestore from "../images/techImages/firestore.png";

import javascript from "../images/techImages/javascript.png";
import react from "../images/techImages/react.png";

import python from "../images/techImages/python.png";

import mongodb from "../images/techImages/mongodb.png";
import mysql from "../images/techImages/mysql.png";

const Languages = () => {
  return (
    <>
      <div className="languages-container">
        Front-end
        <img src={javascript} alt="javascript" className="languagesShrink " />
        <img src={react} alt="react" className="languagesShrink " />
        Back-end
        <img src={java} alt="java" className="languagesShrink" />
        <img src={kotlin} alt="kotlin" className="languagesShrink" />
        <img src={python} alt="python" className="languagesShrink " />
        Database
        <img src={mongodb} alt="mongodb" className="languagesShrink " />{" "}
        <img src={mysql} alt="mysql" className="languagesShrink " />
        <img src={firestore} alt="firestore" className="languagesShrink" />
      </div>
    </>
  );
};

export default Languages;
