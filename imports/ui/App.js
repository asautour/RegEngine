/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';
import MainPanelAdmin from './MainPanelAdmin';
import MainPanelAnalysis from './MainPanelAnalysis';
import MainPanelChange from './MainPanelChange';
import TopBar from './Topbar';
import UserForm from './UserForm';

import './App.css';

const App = ({
  loading, client, user,
}) => {
  if (loading) return null;
  return (
    <div>
      {!user._id
    && <UserForm user={user} client={client} />
    }
      {user._id
    && (
      <Router>
        <div className="App">

          {/* HEADER */}
          <TopBar />

          {/* MAIN CONTENT / CORE PANEL */}
          <Switch>
            <Route exact path="/admin" component={MainPanelAdmin} />
            <Route path="/analysis" component={MainPanelAnalysis} />
            <Route path="/change" component={MainPanelChange} />
          </Switch>

          {/* FOOTER */}
          <footer className="footer">
            This is my footer
          </footer>
        </div>
      </Router>
    )}
    </div>
  );
};

const userQuery = gql`
  query Users {
    user {
      _id
    }
  }
`;


export default graphql(userQuery, {
  props: ({ data }) => ({ ...data }),
})(withApollo(App));
