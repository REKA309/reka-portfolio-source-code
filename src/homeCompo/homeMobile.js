import React from "react";
import Girlaptop from '../mediaFolder/ightmode.png'
export default function HomeMobile({isDarkMode})
{
    const containerStyles = {
        display: "flex",
        width: "100%",
        height: "85vh",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
        padding:'20px',
        boxSizing:'border-box'
        
        /* Add other styles as needed */
      };
      const imgStyles={
        width:'100%',
        display:'flex',
        justifyContent:'center',
       
  
      }
      const contentStyles={
        width:'100%',
        display:'flex',
        flexDirection:'column',
       
      }
      
    return(
        <div  style={containerStyles} className="home-container">
           
            <div className="home-content"style={contentStyles}>
                <h2 style={{ color: isDarkMode ? "#fff" : "#000" }}>Hello 👋 I'm Reka N</h2>
                <h5 style={{ color: isDarkMode ? "#fff" : "#000" }}>WEB DEVELOPER| FRONT-END DEVELOPER |<br/> FULL STACK DEVELOPER -MERN STACK</h5>
            </div>
            <div className="home-image" style={imgStyles}>
            <img src={Girlaptop} alt="girldeveloper" width={350} height={375}/>
            </div>   
        
        </div>
    )
}