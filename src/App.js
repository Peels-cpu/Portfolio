import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
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
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route exact path='/About'>
                    <About />
                  </Route>
                  <Route exact path='/Projects'>
                    <Projects />
                  </Route>
                  <Route exact path='/Resume'>
                    <Resume />
                  </Route>
              </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
