import "./WorkCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const WordCard = (props) => {
  return (
    <div className="work-container">
        <h1 className="project-heading">PROJECTS</h1>
        <div className="projects"> 
            <div className="project-card">
                <img src = {props.imgsrc} alt="img" />
                <h2 className="project-tiltle">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns"> 
                        <NavLink to= {props.view} className= "btn">View</NavLink>
                        <NavLink to= "url.com" className= "btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WordCard