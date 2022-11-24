import React from "react";
import Contact from './Contact';
import Sanitation from './image/sanitation.jpg';
import Covid from './image/covid.jpg';
import Coding from './image/coding.jpg';
import CounterDex from './image/CounterDex.png';
import RevoTrivia from './image/RevoTriviaCard.jpg';
import Group from './image/Group.webp';

const About = () => {
    return ( 
        <div className="App-header">
            <div className="AboutContainer">
                <h1>About Me</h1>
                <h4>EDUCATION:  Sir Robert L Borden Business & Technical Institute	2006-2010</h4>
                <h5>ACHIEVEMENTS</h5>
                <ul>
                    <li>Maintained a perfect attendance at Sir Robert L. Borden from Grade 9 & 10</li>
                    <li>Acquired the Honor Roll Award through Grade 9 & 10</li>
                    <li>Obtained the Co-op Student Award during my time at Sir Robert Borden</li>
                </ul>
                <div className="image-container">

                <img alt="Profile pic of me" className='imageSize' src={Sanitation}></img>

                </div>

                <p>
                    In my Early Twentys I has no idea what I wanted to be or what type of career to pursue. I have worked all kinds of jobs,
                    from being a humble factory worker to a security guard, call center agent and even a Sanitarian cleaner for acouple of large bakerys.
                </p>
                <hr />
                <h4 style={{color:'Orange'}}>Fast forword into 2021. Into the Covid Pandemic.</h4>
                <img alt="Profile pic of me" className='imageSize' src={Covid}></img>
                <p>
                    When covid started, I was affected by the mass layoff of the factory and started thinking more about a long term career. During Isolation, I was on 
                    the computer more than I was ever used to.
                </p>
                <img alt="Profile pic of me" className='imageSize' src={Coding}></img>
                <p>
                    During the pandemic I slowly honed my coding skills, while studying I was also playing
                    a virtual reality game called Revomon.
                </p>
                
                <p>
                    Revomon gave me a topic to build my projects around, and so I created and launched my first website the Counter Dex.
                </p>
                <img alt="Profile pic of me" className='imageSize' src={CounterDex}></img>
                <p>
                    Being the only 4 time tournament champion of revomon battles (Tournament held every month).
                    I thought that I should be the most qualified person to make an entire website about revomon
                    Strategy and battle mechanics and so the Counter Dex was created with simple HTML SASS/CSS and Javascript with bootstrap. 
                </p>
                <img alt="Profile pic of me" className='imageSize' src={RevoTrivia}></img>
                <p>
                    I spent acouple of weeks learning the basics of React and soon I created a trivia game based on the Revomon monsters from my favourite game. 
                    I hosted the React app using Git hub pages and pushed all my project codes into my git hub.
                </p>
                <a className=" NoUnderline" href="https://github.com/Peels-cpu" target='_blank'><svg className="icons NoUnderline" xmlns="http://www.w3.org/2000/svg" width="52" height="70" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg></a>
                <p>
                    As a self taught coder, I wish to work with others and expand my skills deeper into this fullfilling career with greater speed than learning on my
                    own.
                </p>
                <img alt="Profile pic of me" className='imageSize' src={Group}></img>
                
            </div>
            <Contact />
        </div>

    

        
     );
}
 
export default About;