import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header.js';
import './App.css';
import PageOne from '../PageOne/PageOne.js';
import PageTwo from '../PageTwo/PageTwo.js';
import PageThree from '../PageThree/PageThree.js';
import PageFour from '../PageFour/PageFour.js';
import PageFive from '../PageFive/PageFive.js';
import Admin from '../Admin/Admin.js';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br />
          <Route exact path="/" component={PageOne} />
          <Route path="/2" component={PageTwo} />
          <Route path="/3" component={PageThree} />
          <Route path="/4" component={PageFour} />
          <Route path="/5" component={PageFive} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
