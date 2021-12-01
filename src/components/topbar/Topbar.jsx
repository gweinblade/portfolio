import "./topbar.scss"

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar "+ (menuOpen && "active")} >
            
                <div className="left">
                    <a href="#intro" className="logo">Gweinblade.</a>
                   
                </div>
                
                <div className="Right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
           
        </div>
    )
}
