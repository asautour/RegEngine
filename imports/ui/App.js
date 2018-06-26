/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';
import MainPanel from './MainPanel';
import TopBar from './Topbar';


const App = () => (
  <Router>
    <div className="App">

      {/* HEADER */}
      <TopBar />

      {/* MAIN CONTENT / CORE PANEL */}
      <Switch>
        <Route exact path="/" component={MainPanel} />
        <Route path="/:search" component={MainPanel} />
        <Route path="/:analyse" component={MainPanel} />
        <Route path="/:change" component={MainPanel} />
      </Switch>

      {/* FOOTER */}
      <footer>
        This is my footer
      </footer>
    </div>
  </Router>
);

export default App;
