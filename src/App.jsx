import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import About from "./components/work/About";
import "./app.scss"
import { useState } from "react";
import {Route,Routes}  from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Menu from "./components/menu/Menu";



function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections"> 
      
          <AnimatePresence>
          <Routes>
            <Route path="/" element={<Intro/>}/>
              
            
            <Route path="/portfolio" element={ <Portfolio/>}/>
             
                    
            <Route path="/about" element={<About/>}/>
              
            
            <Route path="/contact" element={ <Contact/>} />

            
             
            
          </Routes>
          </AnimatePresence>
  </div>
    
    
    </div>
  );
}

export default App;
