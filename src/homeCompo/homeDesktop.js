import React from "react";
// import Girlaptop from '../mediaFolder/girl_laptop.png'
import Girlaptop from '../mediaFolder/ightmode.png'
export default function HomeDesktop({isDarkMode})
{
    
      
    return(
        <div   className="home-container">
           <div className="home-image" >
            <img src={Girlaptop} alt="girldeveloper" className="imgabt" />
            </div> 
            <main className="container">
        <p style={{ color: isDarkMode ? "#fff" : "#000" }}>Hello 👋 I'm</p>
        <div className="animation">
            <div className="first"><div>REKA N</div></div>
            <div className="second"><div>FRONT END DEVELOPER</div></div>
            <div className="third"><div>FULL STACK DEVELOPER</div></div>
        </div>
        </main>
        
        </div>
    )
}