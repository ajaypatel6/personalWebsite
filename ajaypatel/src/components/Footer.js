import React from "react";
import "../index.css";

import github from "../images/github.png";
import gmail from "../images/gmail.png";
import linkicon from "../images/linkicon.png";
import resume from "../images/resume.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={github} alt="github" className="footer-img" />
      <a href="https://github.com/ajaypatel6" className="footer-seperation ">
        Github
      </a>

      <img src={linkicon} alt="linkicon" className="footer-img" />
      <a
        href="https://www.linkedin.com/in/ajay-patel-13b13b113/"
        className="footer-seperation filter-btn"
      >
        LinkedIn
      </a>

      <img src={gmail} alt="gmail" className="footer-img" />
      <a href="mailto:ajaypatel23623@gmail.com" className="footer-seperation">
        Email
      </a>

      <img src={resume} alt="resume" className="footer-img" />
      <a href="" className="footer-seperation">
        Download Resume
      </a>
    </div>
  );
};

export default Footer;
