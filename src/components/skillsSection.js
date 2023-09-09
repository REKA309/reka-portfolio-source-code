import React from "react";
import photos from "../mediaFolder/photos";
export default function SkillsSection({isDarkMode})
{
    return(
        <div className="skill-container row">
           
            <h1 style={{ color: isDarkMode ? "#fff" : "#000" }} ><b>Professional Skillset 🎯</b></h1>
        {photos.map((photo, index) => (

        <div key={index} className="card col-g-3  col-md-6 col-sm-12">
            <div className="card-body">
                <img src={photo.thumbnail} alt={photo.altname} width={100} height={100}/>
            </div>
        
        </div>
        ))}
        </div>
    )
}