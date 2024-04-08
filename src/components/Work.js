import "./WorkCardStyles.css"
import WordCard from "./WordCard"
import ProjectCardData from "./WorkCardData"

import React from 'react'


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">PROJECTS</h1>
        <div className="project-container"> 
            {ProjectCardData.map((val,ind) => {
                return (
                    <WordCard
                    key = {ind}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    view = {val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work