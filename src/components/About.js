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
            <p> Hello! My name is Christina Vo, and I am a 3rd year Computer Science major
                and Biological Science minor at UC Davis. 
            <p>
            </p>
                My interests lie in software engineering and graphic visualization. 
                As someone who enjoys expressing creativity, 
                I hope to apply my skills and experiences in research, arts, and 
                technology to make a tangible impact on the biggest challenges in society.
            </p>
            <p>
                I also really enjoy baking and listening to Taylor Swift's music! Thank you for visiting!
            </p>
        </div>
    </div>
  )
}

export default About
