import AOS from 'aos';
import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'


const Skills = () => {
    
  useEffect(() => {
    AOS.init({duration: 2000});
  }, {})

  
    return ( 
        <div className="">
            <hr/>
            <h1 style={{marginTop: '30px'}}>My Skill Sets</h1>
            <hr />

            <ul className='componentContainerCol'>
                <li className="listSpace " data-aos="flip-left">
                    HTML
                </li>
                <li className="listSpace" data-aos="fade-up">
                    CSS/Sass
                </li> 
                <li className="listSpace" data-aos="fade-down">
                    Bootstrap and React-Bootstrap
                </li>
                <li className="listSpace" data-aos="flip-right">
                    Git and Github Pages
                </li>
                <li className="listSpace" data-aos="zoom-in">
                    JavaScript
                </li>
                <li className="listSpace" data-aos="zoom-in">
                    API integration
                </li>
                <li className="listSpace" data-aos="flip-right">
                    React
                </li>
                <li className="listSpace" data-aos="flip-right">
                    Wordpress
                </li>

                <li className="listSpace" data-aos="flip-right" style={{marginBottom:'30px'}}>
                    Responsive Design and Programing
                </li>

            </ul>

            
        </div>
     );
     <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
}
 
export default Skills;