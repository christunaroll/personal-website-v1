import React from 'react'
import "./Footer.css";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer>
        <SocialIcon id="linkedin" url="https://linkedin.com/in/jaketrent" />
        <SocialIcon id="github" url="https://github.com/christunaroll" />
        <SocialIcon id="mail" url="mailto:christina.vo2001@gmail.com" />
        <p className="footer_description">Designed and coded by Christina Vo</p>
    </footer>
  )
}
// FIXME: need to add actual social media accounts 

export default Footer
