import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/poo.jpg";
import { Link } from "react-scroll";
import contact2 from "../../Assets/contact2.png";
import menu from "../../Assets/menu.png"

function Navbar(){
    const [showmenu,setShowmenu]=useState(false);

    return(
        <div>
           
            <nav className="navbar">
                <img className="logo" src={logo} alt="Logo" />
                <div className="desktopMenu">
<Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
<Link activeClass="active" to="skills" spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">About</Link>
<Link activeClass="active" to="works" spy={true} smooth={true} offset={-40} duration={600} className="desktopMenuListItem">Portfolio</Link>
<Link activeClass="active" to="clients" spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Clients</Link>
                </div>
                <button className="desktopMenuBtn" onClick={()=>{
                    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
                }}>
        <img src={contact2} alt="" className="desktopMenuImg" />Contact Me
                </button>
                <img className="mobMenu" src={menu} alt="Menu" onClick={()=>setShowmenu(!showmenu)

                }/>
                <div className="navMenu" style={{display:showmenu? 'flex':"none"}}>
<Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={1000} className="ListItem" onClick={()=>{setShowmenu(false)}}>Home</Link>
<Link activeClass="active" to="skills" spy={true} smooth={true} offset={-40} duration={1000} className="ListItem" onClick={()=>{setShowmenu(!showmenu)}}>About</Link>
<Link activeClass="active" to="works" spy={true} smooth={true} offset={-40} duration={1000} className="ListItem" onClick={()=>{setShowmenu(!showmenu)}}>Portfolio</Link>
<Link activeClass="active" to="clients" spy={true} smooth={true} offset={-40} duration={1000} className="ListItem" onClick={()=>{setShowmenu(!showmenu)}}>Clients</Link>
<Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-40} duration={1000} className="ListItem" onClick={()=>{setShowmenu(!showmenu)}}>Contacts</Link>
     
                </div>

            </nav>
        </div>
    )
}
export default Navbar;