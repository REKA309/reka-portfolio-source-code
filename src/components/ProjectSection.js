import React from "react";
import { Button } from '@mui/material';
import projects from "../mediaFolder/projects";
export default function Projects({isDarkMode})
{
  
    return(
        <div className="project-container row">
            <h1 style={{ color: isDarkMode ? "#fff" : "#000" }} ><b>Projects 💻 </b></h1>
           {projects.map((project,index)=>(
              <div key={index} className="card col-g-3  col-md-6 col-sm-12">
                <img src={project.thumbnail} alt={project.altname} width={264} height={300}/>
              <div className="card-body">
                  <h2 style={{ color: isDarkMode ? "#fff" : "#000" }}>{project.altname}</h2>
                  <h4 style={{ color: isDarkMode ? "#fff" : "#000" }}>{project.description}</h4>
                  <div className="demobtn">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                  <Button variant="contained"  color="secondary">
                   Demo
                </Button>
                  </a>
                  </div>
              </div>
          
          </div>
           ))}
        </div>
    )
}