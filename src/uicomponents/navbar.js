// Header.js
import React,{useState} from "react";
import { useNavigate} from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from '@mui/icons-material/LightMode';
import { AppBar, Tab, Tabs, Toolbar, useMediaQuery,
    useTheme,IconButton } from "@mui/material";

const Header = ({ toggleDarkMode, isDarkMode }) => {
    const [value, setValue] = useState(0);
    const navigate=useNavigate()
    const theme = useTheme();
    
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   console.log(isMatch)
   
    function handleClick(tab)
    {
          navigate(`/${tab}`)
    }
  return (
    <React.Fragment >
      <AppBar sx={{ background:isDarkMode?'#000':'#fff'}} >
        <Toolbar>
        <img src="https://img.freepik.com/premium-vector/portrait-beautiful-young-woman_478440-398.jpg"
        alt="sample" className="circular-image" width={60} height={60}/>
          <h1 style={{ color: isDarkMode ? "#fff" : "#000" }} >&nbsp;&nbsp;Reka Nagaraj</h1>
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                style={{ color: isDarkMode ? "#fff" : "#000" }}
              >
               <Tab label="Home" onClick={()=>handleClick("")} />
                <Tab label="About" onClick={()=>handleClick("about")} />
                <Tab label="Skills" onClick={()=>handleClick("skills")} />
                <Tab label="Projects" onClick={()=>handleClick("projects")} />
                <Tab label="Contact" onClick={()=>handleClick("contact")}/>
              </Tabs>
              <IconButton
          edge="end"
          color="secondary"
          aria-label="toggle dark mode"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <LightModeIcon/> : <Brightness4Icon />}
        </IconButton>
            </>
         
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
