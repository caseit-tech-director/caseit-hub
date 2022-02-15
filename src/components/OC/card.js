import React, { Component } from "react"
import "./card.scss"
import "@styles/main.scss"
import Images from "./imageData.js"

const card = () => {
  return (
    <div className="OC-container">
      {Images.map((item, index) => {
        return (
          <div className="OC-profile" key={index}>
            <img loading="lazy" src={item.src} className="OC-profile__image" />
            <div className="card--info--wrapper">
              <div className="card--info--content card--info--name"> 
                <caption>{item.name}</caption>
              </div>
              <div className="card--info--content card--info--role">
                <caption>{item.team}</caption>
                <caption>{item.position}</caption>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default card
