import React from "react";
import Girlaptop from '../mediaFolder/girl_laptop.png'
import { Button } from "@mui/material";
export default function About({isDarkMode})
{
    function handleResume()
    {
        const resumeUrl = 'https://drive.google.com/file/d/1HoVAmjt_XBFzDzIHNQhP09Ci_hH-dnei/view';
      
        // create a new anchor element
        const downloadLink = document.createElement('a');
        
        // set the href attribute of the anchor to the URL of your resume PDF file
        downloadLink.href = resumeUrl;
        downloadLink.target='_blank';
        
        // set the download attribute of the anchor to the filename you want to use for the downloaded file
        downloadLink.download = 'resume.pdf';
        
        // simulate a click on the anchor element to trigger the download
        downloadLink.click();
    }
    return(
        <div className="about-container">
            <div className="about-content">
            <div className="wrapper one">
            <div className="drop-main">
                <div className="d">A</div>
                <div className="r">B</div>
                <div className="o">O</div>
                <div className="p">U</div>
                <div className="s">T</div>
                <div>&nbsp;</div>
                <div className="lasts">M</div>
                <div className="puns">E</div>
            </div>
            </div>
            <h4  style={{ color: isDarkMode ? "#fff" : "#000" }}className="h4abt">Hi, This is N.Reka.Aspiring IT professional and recent B.Tech IT graduate (2021) with an impressive CGPA of 8.91. Equipped with comprehensive skills from Guvi's FSD MERN Stack program (2023). I have done projects based on FSD to showcase my skills</h4>
            <div className="res-btn">
                <Button color="secondary" variant="contained" onClick={handleResume}>DOWNLOAD RESUME</Button>
            </div>
            </div>
            <div className="about-picture">
                <img src={Girlaptop}
                alt="sample"
               className="imgabt1"/>
               
            </div>
           
        </div>
    )
}