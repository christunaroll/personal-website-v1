import React from 'react'
import "./Home.css";
import laptop_cat from "../images/LaptopCat.svg";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="home">
        <div className='pic'>
        <img id = "profile_pic" src={laptop_cat}/>
        </div>
        <div className="main_title">
            <h1>
                <p> Hi! </p>
                <p>My name is Christina!</p>
            </h1>
            <Link to="about">
                <button className='glow-on-hover'>About Me!</button>
            </Link>
        </div>
    </div>
  )
}

export default Home
