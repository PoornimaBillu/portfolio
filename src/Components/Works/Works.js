import images1 from "../../Assets/img1.jpg";
import images2 from "../../Assets/img2.jpg";
import images3 from "../../Assets/img3.jpg";
import images4 from "../../Assets/img4.jpg";
import images5 from "../../Assets/img5.jpg";
import images6 from "../../Assets/img6.jpg";
import images7 from "../../Assets/img7.jpg";
import images8 from "../../Assets/img8.jpg";
import images9 from "../../Assets/img9.png";
import React from "react";
import "./Works.css"

function Works(){

    return(
        <div>
            <h1></h1>
            <section id="works">
                <h2 className="workTitle">My Fortpolio</h2>
                <span className="workDesc">I take pride in paying attention to the smallest details and</span>
<div className="worksImgs">
    <img src={images1} alt=" Image One" className="worksImg" />
    <img src={images2}alt=" Image Two" className="worksImg" />
    <img src={images3} alt=" Image Three" className="worksImg" />
    <img src={images4} alt=" Image Four" className="worksImg" />
    <img src={images5} alt=" Image Five" className="worksImg" />
    <img src={images6} alt=" Image Six" className="worksImg" />
    <img src={images7} alt=" Image Seven" className="worksImg" />
    <img src={images8} alt=" Image Eight" className="worksImg" />
    <img src={images9} alt=" Image Nine" className="worksImg" />
    
</div>
                <button className="workBtn">See More</button>

            </section>
        </div>
    )
}
export default Works;