import "./intro.scss"
import { init } from 'ityped'
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import { useEffect,useRef } from "react"
import Particle from "../particle/particle";

export default function Intro() {
    const textref = useRef();
    
    useEffect(()=> {
        init(textref.current, 
            { 
                showCursor: true, 
                backDelay:1500,
                backSpeed:60,
                strings: ["Developer", "Designer","Creator" ] })
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
                  <h1>Hi, I'm <span>Mokrani mehdi</span></h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque nihil voluptates ea dolore vel 
                    repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit amet.</p>
                <h3> <span ref={textref}></span></h3>
                  </div>
               
                <div className="icons">
                    <a href="https://codepen.io/pen/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
                
            </div>
            
           
        </div>
    )
}
