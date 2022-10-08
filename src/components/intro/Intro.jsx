import "./intro.scss"
import { init } from 'ityped'
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import { useEffect,useRef } from "react"
import { LinkedIn } from "@material-ui/icons";
import { motion } from 'framer-motion';
import { transition,animationOne } from "../Animation/animation";

export default function Intro() {
    const textref = useRef();
    
    useEffect(()=> {
        init(textref.current, 
            { 
                showCursor: true, 
                backDelay:1500,
                backSpeed:60,
                strings: ["fullstack Developer  ", "android Developer "," software Developer","unity 3d Developer" ] })
    }, []);
    return (
        <motion.div 
        className="intro" 
        id="intro"
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}
        >
        
             
             <div className="profil" >
             <img src="assets/profil.png" alt=""  />
                </div>
                

              <div className="typography">
                  <div className="s">
                  <h1>Hi, I'm <span>MOKRANI MEHDI</span></h1>
                <p>
                </p>
                <h3> <span ref={textref}></span></h3>
                  </div>
               
                <div className="icons">
                    <a href="https://www.facebook.com/mehdi.mokrani.9/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/gweinblade" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/mehdi-mokrani-692295219/" className="icon i-youtube">
                        
                        <LinkedIn/>
                    </a>
                </div>
                
                    
                <a className="link" href="assets/cv4.pdf" download="cv">
                    <button >
                        Get Resume
                    </button>
                        
                </a>
               
                
            </div>
            
           
        
        
        </motion.div>
    )
}
