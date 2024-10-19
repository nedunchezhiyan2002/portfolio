import "./FooterStyles.css";

import React from "react";
import facebook from "../assets/facebook-icon.jpeg"
import Linkedin from "../assets/linkedin.png"
import GitHub from "../assets/github.png"
import  Twitter from "../assets/twitter.png"

const Footer = () => {
  return (
    <section id="footer">
      <div class="container">
        <a href="mailto:nedunchezhiyan1010@gmail.com">
          nedunchezhiyan1010@gmail.com
        </a>
        <div class="social">
          <a href="https://www.linkedin.com/in/nedunchezhiyank3/">
            <img height="20px" width="20px" src={Linkedin}  alt="Linkedin" />Linkedin
          </a>
          <a href="https://github.com/nedunchezhiyan2002/">
            <img height="20px" width="20px" src={GitHub} alt="GitHub" />Github
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009829356585/">
            <img height="20px" width="20px" src={facebook} alt="Facebook" />Facebook
          </a>
          <a href="https://x.com/Nedu1002/">
            <img height="20px" width="20px" src={Twitter} alt="Twitter" />Twitter
          </a>
        </div>
        <p className="copyright">
          Copyright &copy; NedunchezhiyanK 2024, All rights
          reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
