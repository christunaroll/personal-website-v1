import React from 'react'
import "./About.css"
import me from "../images/profile_pic.jpg"
import cat from "../images/CatCup.svg"

function About() {
  return (
    <div className='about'>
        <img className = "profile_pic" src={me}/>
        
        <div className='description'>
            <h1>About Me!</h1>
            <p>Hello! My name is Christina Vo, and I am a 3rd year Computer Science major
                and Biological Science minor at UC Davis!
            </p>
            <p>
                I love graphics and biology! Open to learning!
            </p>
        </div>
    </div>
  )
}

export default About
