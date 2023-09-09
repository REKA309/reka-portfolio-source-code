import React from "react";
import Contact from '../mediaFolder/contactus.png'
import social from "../mediaFolder/social";
export default function ContactSection({isDarkMode})
{
    const currentYear = new Date().getFullYear();
  const yourNameOrCompany = 'REKA NAGARAJ';
  const contactEmail = 'reka3092@gmail.com';
    return(
        <div className="contact-whole">
        <div className="contact-container">
        <div>
                <h2 style={{ color: isDarkMode ? "#fff" : "#000" }}>Find Me On</h2>
            </div>
           <div className="social-media">
               {social.map((acc)=>(
               <a key={acc.id} href={acc.hyplink}  target="_blank"  rel="noreferrer">
                 <img src={acc.icon}
                alt={acc.altname}
               className="socialicon"/>
               </a>
               ))} 
           </div>
        <div className="copyright-section">
      <p style={{ color: isDarkMode ? "#fff" : "#000" }}>&copy; {currentYear} {yourNameOrCompany}</p>
      <p style={{ color: isDarkMode ? "#fff" : "#000" }}>
     
All content on this website is copyrighted and owned by {yourNameOrCompany}. Unauthorized reproduction or use in any form is prohibited. Third-party images and resources are subject to their respective licenses. For inquiries &nbsp;<a className="under" href={`mailto:${contactEmail}`}>
    Click Here
    </a>
      </p>
     
    </div>
        </div>
    <div className="about-picture1">
            <img src={Contact} alt="contact" width={400} height={400}/>
           </div>
        </div>
    )
}