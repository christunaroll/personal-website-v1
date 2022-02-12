import React from 'react'
import "./Projects.css"
import mug from "../images/white_mug.jpg";
import wine from "../images/final_v2.jpg";
import { SocialIcon } from 'react-social-icons';


function Projects() {
  return (
    <div className='projects'>
        <h1>Projects</h1>
        <h2>Coding Projects </h2>
        <div className='coding_projects'>
          <div className = 'build-a-benji'>
            <div className='container_1'>
              <SocialIcon id="github" url="https://github.com/christunaroll" />
              <p>Buzz-A-Benji &ensp;</p>
              {/*<a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">[Live Demo]</a> */}
            </div>
          </div>
          <div className = 'Taylordle'>
            <div className='container_1'>
                <SocialIcon id="github" url="https://github.com/christunaroll" />
                <p>Taylordle &ensp;</p>
                {/*<a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">[Live Demo]</a> */}
            </div>
          </div>
          <div className = 'ConnectN'>
            <div className='container_1'>
                  <SocialIcon id="github" url="https://github.com/christunaroll" />
                  <p>ConnectN</p>
            </div>
          </div>
          <div className = 'Metanoia'>
            <div className='container_1'>
                  <SocialIcon id="github" url="https://github.com/christunaroll" />
                  <p>Metanoia</p>
            </div>
          </div>
        </div>
        <h2>3D Rendering and Modelling</h2>
        <div className='maya_projects'>
          <div className = 'container_1'>
            <img className = "pics" src={mug}/>
            <p>white mug, modelled and rendered with Autodesk Maya &ensp;</p>
            {/*<a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">[View Larger Image]</a> {/*add a live demo lol */}
          </div>
          <div className = 'container_1'>
            <img className = "pics" src={wine}/>
            <p>picnic scene, modelled and rendered with Autodesk Maya &ensp;</p>
            {/*<a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">[View Larger Image]</a> {/*add a live demo lol */}
          </div>
        </div>
    </div>
  )
}

export default Projects
