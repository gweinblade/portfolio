import "./intro.scss"
import { init } from 'ityped'
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import { useEffect,useRef } from "react"
import Particle from "../particle/particle";
import { LinkedIn } from "@material-ui/icons";


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
        <div className="intro" id="intro" >
             <div className="lines">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className="line-4"></div>
            </div>
            
            
            <Particle/>
            
       
                


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
                
                    
                <a className="link" href="assets/cv2.pdf" download="cv">
                    <button >
                        Get Resume
                    </button>
                        
                </a>
                
                
            </div>
            
           
        </div>
    )
}
