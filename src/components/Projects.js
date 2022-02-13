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
              <SocialIcon id="github" url="https://github.com/christunaroll/buzz-a-benji" />
              <p>Buzz-A-Benji &ensp;</p>
              {/*<a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">[Live Demo]</a> */}
            </div>
          </div>
          <div className = 'Taylordle'>
            <div className='container_1'>
                <SocialIcon id="github" url="https://github.com/christunaroll/Taylordle"/>
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
                  <SocialIcon id="github" url="https://github.com/christunaroll/metanoia" />
                  <p>Metanoia</p>
            </div>
          </div>
        </div>
        <h2>3D Rendering and Modelling</h2>
        <div className='maya_projects'>
          <div className = 'container_1'>
            <img className = "pics" src={mug}/>
            <p>white mug, modelled and rendered with Autodesk Maya &ensp;</p>
            <a href="https://drive.google.com/file/d/1LmlroqYl-WK5VrB9IV7v5BzOWfGeswOB/view" target="_blank" rel="noopener noreferrer">[View Larger Image]</a> 
          </div>
          <div className = 'container_1'>
            <img className = "pics" src={wine}/>
            <p>picnic scene, modelled and rendered with Autodesk Maya &ensp;</p>
            <a href="https://drive.google.com/file/d/1ppOy_5ti_18XfPNVZhHf1HqZIJo22OcF/view" target="_blank" rel="noopener noreferrer">[View Larger Image]</a> 
          </div>
        </div>
    </div>
  )
}

export default Projects
