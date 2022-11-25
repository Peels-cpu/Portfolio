import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'


function App() {
  return (
    <Router>
      <div className="App ">
        <Navbar />
        
          <div className="content">
              <Switch>
                  <Route exact path='/' component={Home}>
                    <Home />
                  </Route>
                  <Route exact path='/About' component={About}>
                    <About />
                  </Route>
                  <Route exact path='/Projects' component={Projects}>
                    <Projects />
                  </Route>
                  <Route exact path='/Resume' component={Resume}>
                    <Resume />
                  </Route>
              </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
