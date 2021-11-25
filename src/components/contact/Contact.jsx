
import './contact.scss'
import { useState } from 'react';
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heading from '../heading/Heading';
import ContactItem from './contactItem/ContactItem';
import { Email, Phone, Room } from '@material-ui/icons';
import Particle2 from "../particle/particle2";
//import Particle2 from "../particle/particle2";


  export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    
    

     // handle inputs
    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubject = (e) => {
        setSubject(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };
    
      const onSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || subject.length === 0 || message.length === 0) {
            
          } else {
              let toSend = {
                name,
                email,
                subject,
                message,
              }
            send(
                'service_5dolrmu',
                'template_ryx8wwt',
                toSend,
                'user_nrdQxVnrsJklJZR55wKNR'
              )
              .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success("your email was sent succesfully");
            })
            .catch((err) => {
                console.log('FAILED...', err);
                toast.error("your email was not sent ");
            });
    
            setName("");
            setEmail("");
            setMessage("");
            setSubject("")
          }
        
       
        };
    
      
    
   
    return (
        <div className="contact" id="contact" >
            
            
            
           
          <ToastContainer/>
          <Heading title={'Contact Me'} sub={'Let\'s Keep In Touch '}/>
          <div className="contact-section">
          <div className="left-content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                    </div>
                    
                    
                                     <form  className="form" onSubmit={onSubmit}>

                        <div className="field">
                            <label htmlFor="name"  >Enter your name*</label>
                            <input type="text" id="name" autocomplete="off" name='name'  value={name} onChange={handleName} />
                        </div>
                        <div className="field">
                            <label htmlFor="email"  >Enter your email*</label>
                            <input type="email" id="email" autocomplete="off" name='email'  value={email} onChange={handleEmail} />
                        </div>
                        <div className="field">
                            <label htmlFor="subject"  >Enter your subject</label>
                            <input type="text" id="subject" autocomplete="off" name='subject'  value={subject} onChange={handleSubject} />
                        </div>
                        <div className="field">
                            <label htmlFor="text-area">Enter your Message*</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="10" type="text"
                        
                        
                        value={message}
                        onChange={handleMessage} 
                        autocomplete="off" ></textarea>
                        </div>
                        <div className="send">
                        <button type="submit">
                            Send 
                            
                        </button>
                        </div>
                    </form>
                </div>


                <div className="right">
                    <ContactItem image={<Phone/>} title={'Phone'} one={'+213 6 64 85 13 79'}  two={''} />
                    <ContactItem image={<Email/>} title={'Email'} one={'mmokrani514@gmail.com'}  two={'mehdi-70@live.com'} />
                    <ContactItem image={<Room/>} title={'Adress'} one={''}  two={''} />
                    
                </div>
                </div>
                <Particle2/>
                
        </div>
    )
}
