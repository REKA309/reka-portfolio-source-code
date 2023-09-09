// App.js
import './App.css';
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./uicomponents/navbar";
import DrawerComp from "./uicomponents/drawer";
import { dayModeTheme, nightModeTheme } from "./uicomponents/themes";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomeDesktop from "./homeCompo/homeDesktop";
import HomeMobile from './homeCompo/homeMobile';
import SkillsSection from './components/skillsSection';
import Projects from './components/ProjectSection';
import About from './components/aboutSection';
import ContactSection from './components/contactSection';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "false"
  );
  const [isDesktop, setIsDesktop] = useState(false);

  // Update the isDesktop state based on the screen size
  const updateScreenSize = () => {
    setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as needed
  };
   // Add an event listener to update the screen size on resize
   useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    localStorage.setItem("darkMode", newMode);
    setIsDarkMode(newMode);
  };

  // Set the theme based on the dark mode toggle
  const theme = isDarkMode ? nightModeTheme : dayModeTheme;

  useEffect(() => {
    // Set the theme initially when the component mounts
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);

  return (
   
     <ThemeProvider theme={theme}>
      <div className="portfolio">
      <Router>
      <div className='nabar'>
      {isDesktop ? <Header  toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/> : <DrawerComp  toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>}
      </div>
      <div className='routeComponent'>
     
      <Routes>
       

        <Route exact path='/' element={isDesktop?<HomeDesktop isDarkMode={isDarkMode}/>:<HomeMobile isDarkMode={isDarkMode}/>}/>
        <Route exact path='/skills' element={<SkillsSection isDarkMode={isDarkMode}/>}/>
        <Route exact path='/projects' element={<Projects isDarkMode={isDarkMode}/>}/>
        <Route exact path='/about' element={<About isDarkMode={isDarkMode}/>}/>
        <Route exact path='/contact' element={<ContactSection isDarkMode={isDarkMode}/>}/>
      </Routes>
        </div>
   
      </Router>
      </div>
    </ThemeProvider>
   
  );
}

export default App;
