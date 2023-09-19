import React from "react";
import "./Intro.css";
import profile from "../../Assets/bg2.png"
import { Link } from "react-scroll";
import hire from "../../Assets/hire2.png"

function Intro(){

    return(
        <div>
            {/* <h2>Introduction</h2> */}
            <section id="intro">
                <div className="introContent">
<span className="hello">Hello,</span>
<span className="introText">I'm <span className="introName">Poornima</span><br></br>Website Designer</span>
<p className="introPara">I am a skilled web designer with experience in creating <br></br>visually appealing and user friendly websites.</p>
<Link><button className="btn"><img src= {hire} alt="Hire Me" className="imageh"/>Hire Me</button></Link>
                </div>
                <img src={profile} alt="Profile" className="bg" />

            </section>
        </div>
    )
}
export default Intro;