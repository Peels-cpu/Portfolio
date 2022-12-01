import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import React from 'react';
import emailjs from '@emailjs/browser';
import { BsFillTelephoneForwardFill } from "react-icons/bs";

// Phone function
const Callto = ({ phone, children }) => {
  return <a href={`tel:${phone}`}>{children}</a>;
}

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_9vhza3d', 'template_k2hspys', e.target, 'A6Hu9EJ0MfdfQV_Wh')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    alert(`I will respond to your Email asoon as I can, Thank you and have a great day!`)
};


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  


  return (
    <button
      className='ContactBtn'
      type="button" style={{ width:'100px' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
    
  );
}

function Contact() {
  return (


    
    
    <Accordion defaultActiveKey="0">

      <Card className='FooterContainer' style={{ backgroundColor: 'black' }}>
        <Card.Header>
        <h4>Let's connect and build something.</h4>
          <CustomToggle eventKey="1" >Email</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>    <div className="container mt-5">
            <h3 style={{marginTop:'-40px'}}>Click my number to call me</h3>
          <Callto phone="647 335 4110"><div className="number" style={{display:'flex', justifyContent:'center', marginBottom:'20px',
          }}><BsFillTelephoneForwardFill /><h2>647 335 4110</h2></div></Callto>


      
      <form onSubmit={sendEmail} >
      <h2 className="mb-3">or Reach me on Email</h2>
      <label className="form-label" htmlFor="name">Name</label>
        <div className="mb-3">
          <input type="text" name="name" style={{boxShadow:'teal 0px 0px 2px 2px'}} />
        </div>

        <label className="form-label" htmlFor="email">Email</label>
        <div className="mb-3">
          <input type="email" name="email" style={{boxShadow:'teal 0px 0px 2px 2px'}} />
        </div>

        <label className="form-label" htmlFor="message">Message</label>
        <div className="mb-3">
          <textarea name="message" style={{boxShadow:'teal 0px 0px 2px 2px'}}/>
        </div>
        <input type="submit" value="Send" style={{boxShadow:'teal 0px 0px 2px 2px',width:'100px', color:'white', backgroundColor:'green'}}/>
      </form>
    </div></Card.Body>
        </Accordion.Collapse>
        
          
          
      </Card>
      <div>
        <Footer/>
      </div>
      
    </Accordion>
    
  );
}

export default Contact