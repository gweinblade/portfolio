import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/work/Works";
import "./app.scss"
import { useState } from "react";
import {Route,Routes}  from "react-router-dom";

import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections"> 
      
      
          <Routes>
            <Route path="/" element={<Intro/>}>
              
            </Route>
            <Route path="/portfolio" element={ <Portfolio/>}>
             
            </Route>           
            <Route path="/works" element={<Works/>}>
              
            </Route>
            <Route path="/contact" element={ <Contact/>}>
             
            </Route>
          </Routes>
       
      </div>
    
      
    </div>
  );
}

export default App;
