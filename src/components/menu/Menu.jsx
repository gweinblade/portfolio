import "./menu.scss"
import { NavLink } from 'react-router-dom'

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu "+ (menuOpen && "active")}>
            <ul className="nav-items">
            <li className="nav-item" onClick={()=>setMenuOpen(false)} >
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                </li>
               
                <li className="nav-item" onClick={()=>setMenuOpen(false)}>
                    <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                </li>
                <li className="nav-item" onClick={()=>setMenuOpen(false)}>
                    <NavLink to="/about" activeClassName="active">About me</NavLink>
                </li>
                <li className="nav-item" onClick={()=>setMenuOpen(false)}>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
                
            </ul>
            
        </div>
    )
}
