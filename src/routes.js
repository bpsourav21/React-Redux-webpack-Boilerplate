import React, { Component } from "react";
import { connect } from 'react-redux';
// import { Link, withRouter } from "react-router-dom";

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './components/Home';
import Loading from './components/Loading';

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './components/DynamicPage'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './components/NoMatch'),
  {
    LoadingComponent: Loading
  }
);


export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPAge} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    )
  }
}

