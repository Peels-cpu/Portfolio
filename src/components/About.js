import Contact from './Contact';
import Sanitation from './image/sanitation.jpg';
import Coding from './image/coding.jpg';
import CounterDex from './image/CounterDex.png';
import RevoTrivia from './image/RevoTriviaCard.jpg';
import Group from './image/Group.webp';
import Valulator from './image/Valulator.png';
import AOS from 'aos';
import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
      }, {})

    return ( 
        <div className="App-header">
            <div className="AboutContainer">
                <h1>About Me</h1>

                <div className="image-container">

                    <img alt="Profile pic of me at work" className='imageSize' src={Sanitation}  data-aos="fade-up-right"></img>

                </div>
                <div data-aos="fade-up-left" className="paragraphBG">
                    <p>
                        In my Early Twenties I had no idea what I wanted to be or what type of career to pursue. I have worked all kinds of jobs, from being a humble factory worker to a security guard, call center agent and even a Sanitarian cleaner for a couple of large bakeries.
                    </p>
                </div>

                <hr />
                <div data-aos="fade-up-left" className="paragraphBG">
                    <h4 style={{color:'Orange'}}>Fast forword into the Covid Pandemic.</h4>
                    <p>
                        During the long year of the covid crisis, I have spent considerable time creating websites and software.
                        I have taught myself extensively on how to use the react.js library as well as many other frameworks such as bootstrap and advanced Cascading Style Sheets (css).
                    </p>
                </div>

                <img alt="picture of coding" className='imageSize' src={Coding} data-aos="fade-up-right"></img>
                <div data-aos="fade-up-left" className="paragraphBG">
                    <p>
                        I developed my coding skills with coding bootcamps such as team tree house and codecademy. I first learned the basics of HTML, CSS/SASS, bootstrap, Javascript and React.js. 
                    </p>
                </div>

                <img alt="picture of counterdex" className='imageSize' src={CounterDex} data-aos="fade-up-right"></img>

                <div data-aos="fade-up-left" className="paragraphBG">
                    <p>2022 was a great year for me because I learned a lot from working with a decentralized autonomous organization (DAO) on the development of a website for a cross-platform game called Revomon.</p>
                    <p>Throughout the year, I would be responsible for writing code, debugging issues, and collaborating with the rest of the team to ensure that the website is functional, user-friendly, and visually appealing. I worked closely with the graphic designers in testing the website to ensure that it performs well on different devices and browsers.</p>
                    <p>The website is fully equiped with a price calculator that helps players determain the price of the revomon they have. </p>        
                </div>

                <img alt="valulator site" className='imageSize' src={Valulator}  data-aos="fade-up-right"></img>
                <div data-aos="fade-up-left" className="paragraphBG">
                    <p>Deep battle Strategy and mechanics are also featured on the Counter Dex complete with a trivia game to challenge the revomon community player base. </p>  
                </div>
                
                <img alt="revo trivia picture" className='imageSize' src={RevoTrivia} data-aos="fade-up-right"></img>
                <div data-aos="fade-up-left" className="paragraphBG">
                    <p>
                        All of the revision project codes are saved on GitHub as a repository, which I also use as a free hosting service for the trivia game.
                    </p>  
                        
                    <a className=" NoUnderline" href="https://github.com/Peels-cpu" target='_blank'><svg className="icons NoUnderline" xmlns="http://www.w3.org/2000/svg" width="52" height="70" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg></a>                  
                </div>



                <img alt="Profile pic of me" className='imageSize' src={Group} data-aos="fade-up-right"></img>
                <div data-aos="fade-up-left" className="paragraphBG">
                    <p>
                        Overall, working with a DAO on the development of a website was a rewarding and exciting experience, as I had the opportunity to contribute to the creation of an innovative software and be part of a dynamic and collaborative team.
                    </p>
                </div>

                
            </div>
            <Contact />
        </div>

    

        
     );
}
 
export default About;