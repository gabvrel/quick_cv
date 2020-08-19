import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import Slider from '@material-ui/core/Slider';

const Skills = () => {
    return (
        <div className="Skills">
            <div className="icons">
                <a href="https://www.linkedin.com/in/gabriel-espinosa-92a011109"><LinkedInIcon  color="primary"/> </a> 
                <a href="https://github.com/gabvrel"><GitHubIcon color="primary"/> </a> 
                <a href="mailto:gabvrel@gmail.com"><MailIcon color="primary"/></a> 
            </div>
            <div className="info">
                <h1>Skills</h1>
                <div className="slider">
                 <h3>JavaScript</h3>   
                <Slider disabled defaultValue={90} aria-labelledby="js-slider" />
                </div>
                <div className="slider">
                 <h3>Python</h3>   
                <Slider disabled defaultValue={95} aria-labelledby="py-slider" />
                </div>
                <div className="slider">
                 <h3>React/React Native</h3>   
                <Slider disabled defaultValue={75} aria-labelledby="react-slider" />
                </div>
                <div className="slider">
                 <h3>Others but without recent practice!</h3>   
                <Slider disabled defaultValue={33} aria-labelledby="react-slider" />
                </div>
                
            </div>
            <div className="profile">
                <h2>Profile</h2>
                <p>I'm Gabriel a software developer ready for new challenges. I play the violin and the piano, speak English, Spanish, Russian, and learning German. If you are interested in my profile don't hesitate and contact me!</p>
            </div>
        </div>
    )
}

export default Skills;