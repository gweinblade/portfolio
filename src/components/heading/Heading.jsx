import React from 'react'
import './heading.scss'

export default function Heading({title,sub}) {
    return (
        <div className="heading-container">
                <div className="screen-heading">
                  <span> {title} </span>
                </div>
                <div className="screen-sub-heading">
                  <span> {sub} </span>
                </div>
                <div className="heading-seperator">
                  <div className="seperator-line"></div>
                  <div className="seperator-blob">
                    <div></div>
                  </div>
                </div>
              </div>
    )
}
