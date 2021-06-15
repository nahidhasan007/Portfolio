import {React,useState} from 'react'
import './contact.scss'
import {Facebook,Twitter,LinkedIn,Instagram} from "@material-ui/icons"
import emailjs from 'emailjs-com'

function Contact() {
    const [message,setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_hwuxuq7', 'template_8m36zt1', e.target, 'user_DFV2faf0TyDwRg40JBeod')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="images/shake.svg" alt="contact icon"/>
            </div>
            <div className="right">
               <h2>Contact</h2> 
                <div className="social-media">
                    <Facebook/>
                    <Twitter/>
                    <LinkedIn/>
                    <Instagram/>
                </div>
                <form onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Name"/>
                <input type="email" name="email" placeholder="Your Email"/>
                <input type="text" name="subject" placeholder="Subject"/>
                <textarea name ="message" placeholder="Message"></textarea>
                <button type="submit">Send</button>
                {message && <span>Thanks,I'll reply asap :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
