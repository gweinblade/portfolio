import React from 'react'
import './contactitem.scss'
export default function ContactItem({image,title,one,two}) {
    return (
       <div className="ContactItem">
            <div className="left">
            {image}
            </div>
            <div className="right">
                <h6>{title}</h6>
                <p>{one}</p>
                <p>{two}</p>
            </div>
       </div>
    )
}
