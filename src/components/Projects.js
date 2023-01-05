import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Information from './image/information.jpg';
import Valulator from './image/Valulator.png';
import CounterDex from './image/CounterDex.png';
import RevoTrivia from './image/RevoTriviaCard.jpg';
import RevomonOnline from './image/revomonOnline.jpg';
import AOS from 'aos';
import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'


const Body = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
      }, {})
    return ( 
        <div className="App-header">
            <h1 style={{marginTop:'100px'}}>My Projects</h1>
            <h5 style={{width:'50%'}}>
                My projects for the game of Revomon, each site will undergo updates for each new release from the game.
            </h5>
            <div className="CardsContainer" >
                <Card className="Card" data-aos="zoom-in">
                    <h1 style={{backgroundColor:'black'}}>Revo Trivia</h1>
                <img alt="revo trivia website"  src={RevoTrivia}></img>
                    <Card.Body style={{  color:'white', backgroundColor:'black' }} data-aos="fade-down">
                        <Card.Title>Revo Trivia</Card.Title>
                        <Card.Text style={{ fontSize:'12px' }}>
                            A Trivia game Based on the monsters of Revmon, made with React.
                            <hr />
                            <ul>
                                <li> Making the Revo Triva site has allowed me to learn the basics of react.</li>
                                <li> My very first react project, I learned about components, every revomon is a component with it's own set of questions and answers.</li>
                                <li> Every button click activates the react (use state hooks) and re-renders the next questions.</li>
                                <li> With the Added timer for each queston. It taught me how to use the set interval timer method which i could use for future projects.</li>
                                <li> This site challenges the revomon community to test the individual knowledge they know for each revomon with hard and stressful timed-based questions.</li>
                                <li> The Creation of this site also led me to learn about hosting for free on github pages.</li>
                            </ul>

                        </Card.Text>
                        <div className="column">
                            <Button className="column" href="https://peels-cpu.github.io/react-projects/" target="_blank"  variant="primary">View Site</Button>
                            <Button className="column" href="https://github.com/Peels-cpu/react-projects/tree/master/src" target="_blank"  variant="info">View Code</Button>
                        </div>

                    </Card.Body>
                </Card>
                <hr />
            
                <Card data-aos="zoom-in">
                <h1 style={{backgroundColor:'black'}}>Valulator</h1>
                <img alt="revo price calculator website"  src={Valulator}></img>
                    <Card.Body style={{  color:'white', backgroundColor:'black' }} data-aos="fade-down">
                        <Card.Title>Valulator</Card.Title>
                        <Card.Text style={{ fontSize:'12px' }}>
                            This site page helps new and intermediate players alike determine the value of the revomon they caught.
                            <hr />
                            <ul>
                                <li> Made with simple HTML, CSS/SASS, Bootstrap and Javascript.</li>
                                <li> One of our veteran players of revomon first pitched the idea of creating a calculator that determined price and value based on the stats of the newly caught revomon. I took up his challenge of creating the first ever Free calculator that the players of revomon can freely use.</li>
                                <li> This site uses the randomly generated numbers that each revomon is given when caught. The numbers are inputed to the calculator that will use a basic formula that gives the revmon it's value depending on the inputed values and the rarity of the revomon. </li>
                                <li> By arming new players of the knowledge and value of their newly caught revomons, this will help new players sell and adapt to the market quicker. May also prevent scams and players being cheated if they know the value of what they have.</li>
                            </ul>
                        </Card.Text>
                        <div className="column">
                            <Button className="column" href="https://counterdex.com/Calculators.html" target="_blank"  variant="primary">View Site</Button>
                            <Button className="column" href="https://github.com/Peels-cpu/Projects/commit/15ef9f02013527d141da704af39860e1adc72a3c" target="_blank"  variant="info">View Code</Button>
                        </div>
                    </Card.Body>
                </Card >

                <Card data-aos="zoom-in">
                <h1 style={{backgroundColor:'black'}}>Counter Dex</h1>
                <img alt="Counter dex website"  src={CounterDex}></img>
                    <Card.Body style={{  color:'white', backgroundColor:'black' }} data-aos="fade-down">
                        <Card.Title>Counter Dex</Card.Title>
                        <Card.Text style={{ fontSize:'12px' }}>
                            The main site for revomon Pvp Knowledge and Revomon Counters.
                            <hr />
                            <ul>
                                <li> As my first ever launched website, I learned the basics of website creation, from humble html, to styling with css and the functionalities of javascript.</li>
                                <li> This website took me around 2 months to make, It was the process of collection information from the game of revomon that took the most time.</li>
                                <li> The counterDex is a library for revomon, and each revomon being a book of it's own, each revomon is a clickable tab that will expand and show players where the revomon is located and what map.</li>
                                <li> The counterDex shows players the types, best natures, the stats and the best counters on how to fight each revomon they decide to look up.</li>
                                <li> Since the creation of the CounterDex, it has been the foundational website that teaches players the basics of revomon battling.</li>
                                <li> During a revomon tournament (hosted once a month) players have been known to keep the CounterDex open to immediately search up the revomons they are currently battling for counters.</li>
                                <li> The CounterDex is studied by the elite and new players alike from all over the world and has helped shape and create revomon battling champions from the months it has been created.</li>
                            </ul>
                        </Card.Text>
                        <div className="column">
                            <Button className="column" href="https://counterdex.com/" target="_blank"  variant="primary">View Site</Button>
                            <Button className="column" href="https://github.com/Peels-cpu/Projects/blob/master/Index.html" target="_blank"  variant="info">View Code</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card data-aos="zoom-in">
                <h1 style={{backgroundColor:'black'}}>Information Page</h1>
                <img alt="Information page"  src={Information}></img>
                    <Card.Body style={{  color:'white', backgroundColor:'black' }} data-aos="fade-down">
                        <Card.Title>Info Page</Card.Title>
                        <Card.Text style={{ fontSize:'12px' }}>
                            An Information page about revmon mechanics that helps new and intermediate players alike.
                            <hr />
                            <ul>
                                <li>Created with HTML, CSS, Javascript.</li>
                                <li>This site is created to inform players of the spawns, battle mechanics, typings and natures for revomon.</li>
                                <li>The challenges I faced when creating this page was that it was a graph and image based type of website.</li>
                                <li>Complete with visual charts and graphs collected from well known veteran players.</li>
                                <li>Shows ever single Berry that the revomons are able to use and the effects of each berry.</li>
                                <li>This informational page answers the technical questions that new players will likely stumble upon such as where every single rare and legendary revmon are located and what time they spawn on the map.</li>
                            </ul>
                        </Card.Text>
                        <div className="column">
                            <Button className="column" href="https://counterdex.com/info.html" target="_blank"  variant="primary">View Site</Button>
                            <Button className="column" href="https://github.com/Peels-cpu/Projects/blob/master/info.html" target="_blank"  variant="info">View Code</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card data-aos="zoom-in">
                <h1 style={{backgroundColor:'black'}}>Revomon Online </h1>
                <img alt="wordpress website website"  src={RevomonOnline}></img>
                    <Card.Body style={{  color:'white', backgroundColor:'black' }} data-aos="fade-down">
                        <Card.Title>Revomon Online</Card.Title>
                        <Card.Text style={{ fontSize:'12px' }}>
                            A Wordpress site that I help maintain when new content is released.
                            <hr />
                            <ul>
                                <li>This is the first Wordpress website that I have worked on. Created by a well known player of revomon named goose.</li>
                                <li>When an update of the game happens such as a new revomon being intoduced, I update this site aswell as the CounterDex.</li>
                                <li>The counterdex and revomon Online are two connected websites that compliment each other by having information that the other website does not have.</li>
                                <li>Working on this site has helped me learn the basics of working with the Wordpress platform.</li>
                                <li>The challenges I first faced when working with wordpress was the elements of plugins, at first, the learning curve was somthing completely different than that of coding, but as time went on, the drag and drop style of wordpress suddenly became second nature.</li>
                                <li>Upon learning how to use wordpress, it has taught me a faster way of creating websites.</li>
                                <li>Wordpress would be the platform I would use to create simple websites for clients, and in contrast I would use react to create complex and customizable ones.</li>
                            </ul>
                        </Card.Text>
                        <div className="column">
                            <Button href="https://revomon.online/" target="_blank"  variant="primary">View Site</Button>
                           
                        </div>
                    </Card.Body>
                </Card>
                
            </div>
        </div>

        
     );
}
 
export default Body;