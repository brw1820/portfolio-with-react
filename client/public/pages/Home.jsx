import React from 'react';
import picture from "./Assets/linkedinpicture.png";

const Home = () => {
    return (
        <div>
            <div className="container" id="Me">
        <div className="row-just-content-md-center">
            <div className = "col-md-12">
                <h1>About Me</h1>
                <hr />
            </div>
                <div className ="col-md-12">
                <img src={picture} alt=" Brian in the Galapagos" className="picture"></img>
                <p> My name is Brian Warner, and I am currently beginning my career in the area of coding and web development.  I was born and raised in Atlanta and proceeded to receive my degree in political science from Amherst College.  From then on I primarily worked in the area of fine dining and front of house management.  I currently have my compTIA certifications in A+, Network+, and Security+ and working through Georgia Tech's full-stack web development and coding bootcamp.</p>

                 <p> <a href= "https://www.linkedin.com/in/brian-warner-60712541/" target = "_blank">My LinkedIN Profile</a></p><p><a href= "https://github.com/brw1820" target = "_blank">My Github Profile</a></p> 
                <hr></hr>      
        </div>
        </div>
        </div>
        </div>
    );
};

export default Home;