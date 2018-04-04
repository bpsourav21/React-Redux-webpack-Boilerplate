import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";

import Layout from './Layout';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <p>Hello World of React and Webpack!</p>
        <p>
          <Link to="/dynamic">Navigate to Dynamic Page</Link>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default withRouter(connect(mapStateToProps)(Home));