import React,{useRef,useEffect} from 'react'
import './popup.scss'

export default function Popup(props) {
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                props.setbuttonpop(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {         
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line
    }, [wrapperRef]);
    return (props.buttonpop)  ? (
        <div   className="popup">
            <div  ref={wrapperRef} className="popup-inner">
                <img src="assets/close.png" alt="" className="close" onClick={()=> props.setbuttonpop(false)}></img>
                {props.children}
            </div>            
        </div>
    ) : "";
}
