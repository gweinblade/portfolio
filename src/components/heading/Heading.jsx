import React from 'react'
import './heading.scss'

export default function Heading({title,sub}) {
    return (
        <div class="heading-container">
                <div class="screen-heading">
                  <span> {title} </span>
                </div>
                <div class="screen-sub-heading">
                  <span> {sub} </span>
                </div>
                <div class="heading-seperator">
                  <div class="seperator-line"></div>
                  <div class="seperator-blob">
                    <div></div>
                  </div>
                </div>
              </div>
    )
}
