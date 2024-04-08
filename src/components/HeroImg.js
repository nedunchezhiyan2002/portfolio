import { Link } from "react-router-dom";
import "./HeroImgStyles.css";

const HeroImg = () => {

  return (
    <div className="hero">
      <div className="mask"></div>
      <div className="content">
        <p>Hi I'm FreeLancer</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;



/*
<div className="mask">
            <img className = "into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hi I'm FreeLancer</p>
            <h1>React Developer</h1>
            <div>
                <Link to = "/project" className = "btn" >Projects</Link>
                <Link to = "/contact" className = "btn-light" >Contact</Link>
            </div>
        </div>
        import React from 'react'
import {Link} from "react-router-dom"
import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg"
    </div>

*/