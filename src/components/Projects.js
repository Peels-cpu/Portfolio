import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Information from './image/information.jpg';
import Valulator from './image/Valulator.png';
import CounterDex from './image/CounterDex.png';
import RevoTrivia from './image/RevoTriviaCard.jpg';
import RevomonOnline from './image/revomonOnline.jpg';



const Body = () => {
    return ( 
        <div className="App-header">
            <h1 style={{marginTop:'100px'}}>My Projects</h1>
            <h4>
                My projects for the game of Revomon.
            </h4>
            <div className="CardsContainer">
                <Card style={{ width: '200px', height: '200px', Color:'white',margin:'50px 10px' }}>
                <img alt="revo trivia website" style={{ width: '198px', height: '200px', }} src={RevoTrivia}></img>
                    <Card.Body style={{  color:'white', backgroundColor:'black' }}>
                        <Card.Title>Revo Trivia</Card.Title>
                        <Card.Text style={{ fontSize:'12px' }}>
                            A Trivia game Based on the monsters of Revmon. Made with React.JS
                        </Card.Text>
                        <div className="column">
                            <Button href="https://peels-cpu.github.io/react-projects/" target="_blank" style={{ width: '5rem' }} variant="primary">View Site</Button>
                            <Button href="https://github.com/Peels-cpu/react-projects/tree/master/src" target="_blank" style={{ width: '5rem' }} variant="info">View Code</Button>
                        </div>

                    </Card.Body>
                </Card>

            
                <Card style={{ width: '200px', height: '200px', Color:'white',margin:'50px 10px' }}>
                <img alt="revo price calculator website" style={{ width: '198px', height: '200px', }} src={Valulator}></img>
                    <Card.Body style={{  color:'white', backgroundColor:'black' }}>
                        <Card.Title>Valulator</Card.Title>
                        <Card.Text style={{ fontSize:'12px' }}>
                            This site page helps new Revomon players determine the value of the revomon they caught.
                        </Card.Text>
                        <div className="column">
                            <Button href="https://counterdex.com/Calculators.html" target="_blank" style={{ width: '5rem' }} variant="primary">View Site</Button>
                            <Button href="https://github.com/Peels-cpu/Projects/commit/15ef9f02013527d141da704af39860e1adc72a3c" target="_blank" style={{ width: '5rem' }} variant="info">View Code</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{width: '200px', height: '200px', Color:'white',margin:'50px 10px' }}>
                <img alt="Counter dex website" style={{ width: '198px', height: '200px', }} src={CounterDex}></img>
                    <Card.Body style={{  color:'white', backgroundColor:'black' }}>
                        <Card.Title>Counter Dex</Card.Title>
                        <Card.Text style={{ fontSize:'12px' }}>
                            The main site for revomon Pvp Knowledge and Revomon Counters.
                        </Card.Text>
                        <div className="column">
                            <Button href="https://counterdex.com/" target="_blank" style={{ width: '5rem' }} variant="primary">View Site</Button>
                            <Button href="https://github.com/Peels-cpu/Projects/blob/master/Index.html" target="_blank" style={{ width: '5rem' }} variant="info">View Code</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{width: '200px', height: '200px', Color:'white',margin:'50px 10px' }}>
                <img alt="Information page" style={{ width: '198px', height: '200px', }} src={Information}></img>
                    <Card.Body style={{  color:'white', backgroundColor:'black' }}>
                        <Card.Title>Info Page</Card.Title>
                        <Card.Text style={{ fontSize:'12px' }}>
                            An Information page about revmon mechanics that helps new and intermediate players alike.
                        </Card.Text>
                        <div className="column">
                            <Button href="https://counterdex.com/info.html" target="_blank" style={{ width: '5rem' }} variant="primary">View Site</Button>
                            <Button href="https://github.com/Peels-cpu/Projects/blob/master/info.html" target="_blank" style={{ width: '5rem' }} variant="info">View Code</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '200px', height: '200px', Color:'white',margin:'50px 10px' }}>
                <img alt="wordpress website website" style={{ width: '198px', height: '200px', }} src={RevomonOnline}></img>
                    <Card.Body style={{  color:'white', backgroundColor:'black' }}>
                        <Card.Title>Revomon Online</Card.Title>
                        <Card.Text style={{ fontSize:'12px' }}>
                            A Wordpress site that I help maintain when new content is released.
                        </Card.Text>
                        <div className="column">
                            <Button href="https://revomon.online/" target="_blank" style={{ width: '5rem' }} variant="primary">View Site</Button>
                           
                        </div>
                    </Card.Body>
                </Card>
                
            </div>
        </div>

        
     );
}
 
export default Body;