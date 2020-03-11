import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './components/layouts/Index';
import Lyrics from './components/Lyrics'
import {Provider} from './Context';
import './App.css';

import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        <>
          <Nav />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
       </>
      </Router>
      </Provider>
    );
  }
}

export default App;
