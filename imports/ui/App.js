/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import MainPanelAdmin from './MainPanelAdmin';
// import MainPanelAnalysis from './MainPanelAnalysis';
// import MainPanelChange from './MainPanelChange';
import TopBar from './Topbar';

import './App.css';

const App = () => (
  <Router>
    <div className="App">

      {/* HEADER */}
      <TopBar />

      {/* MAIN CONTENT / CORE PANEL */}
      <Switch>
        <Route exact path="/admin" component={MainPanelAdmin} />
        <Route path="/analysis" component={MainPanelAdmin} />
        <Route path="/change" component={MainPanelAdmin} />
      </Switch>

      {/* FOOTER */}
      <footer className="footer">
        This is my footer
      </footer>
    </div>
  </Router>
);

export default App;
