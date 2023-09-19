import client1 from "../../Assets/clients.jpg";
import client2 from "../../Assets/clients2.jpg";
import client3 from "../../Assets/clients3.jpg";
import client4 from  "../../Assets/clients4.jpg";
import you from "../../Assets/you.png";
import twitter from "../../Assets/twit.png";
import insta from "../../Assets/insta.jpg";
import fb from "../../Assets/fb.jpg";
import "./ContactOne.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
function ContactOne(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8i0ifni', 'template_73yuskl', form.current, 'I2B12hDirW1dsSMO8aA2d')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("email sent")
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div>
            <section id="contactPage">
                <div id="clients">
                    <h1 className="clientPageTitle">My Clients</h1>
                    <p className="clientDesc">Frontend Developer</p>
                    <div className="clientsImgs">
                        <img src={client1} alt="Clients" className="clientsImg" />
                        <img src={client2} alt="Clients" className="clientsImg"></img>
                        <img src={client3} alt="Clients" className="clientsImg"></img>
                        <img src={client4} alt="Clients" className="clientsImg"></img>
                    </div>

                </div>
                <div id="contact">
                    <h1 className="clientPageTitle">Contact Information</h1>
                    <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
<form className="contactForm" ref={form} onSubmit={sendEmail}>
    <input type="text" className="name" placeholder="Your Name here" name="your_name" />
    <input type="email" className="email" placeholder="Your email here" name='your_email' />
    <textarea className="msg" name="message" rows= "7" placeholder="enter your message here"></textarea>
<button type="submit" value='Send' className="submitBtn">Submit</button>
<div className="links">
    <img src={insta} alt="InstaGtarm" className="link" />
    <img src={fb} alt="FaceBook" className="link" />
    <img src={you} alt="Youtube" className="link" />
    <img src={twitter} alt="Twitter" className="link" />

</div>
</form>
                </div>


            </section>
            
        
        </div>
    )
}
export default ContactOne;