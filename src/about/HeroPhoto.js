import React, { Component } from 'react';
import hero_photo from '../data/assets/hero_photo.jpg'

const HeroPhoto = () => {
  const hero_style = {
    backgroundImage: `url(${hero_photo})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }

  const text_style = {
    fontSize: "9vmin",
    lineHeight: "12.5vmin",
    color: "white",
    fontFamily: "Montserrat",

    // Horizontal box centering
    paddingLeft: "8vw",
    paddingRight: "42vw",

    // Center text vertically
    top: "50%",
    position: "absolute",
    transform: "translateY(-50%)"
  }

  return (
    <div
      id="hero_photo"
      style={hero_style}>
      <div
      id="hero_text"
      style={text_style}>
        My name is Tomislav and I'm a software engineer
      </div>
    </div>
  )
}

export default HeroPhoto
