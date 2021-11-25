import React from 'react'
import './popup.scss'

export default function Popup(props) {
    return (props.trigger)  ? (
        <div className="popup">
            <div className="popup-inner">
                <img src="assets/close.png" alt="" className="close" onClick={()=> props.settrigger(false)}></img>
                {props.children}

               
            </div>
            
        </div>
    ) : "";
}
