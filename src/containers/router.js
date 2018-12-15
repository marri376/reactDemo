import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CircuitNameList from "../components/CircuitNameList";
import LocationList from "../components/LocationList"

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
        
          <li><Link to="/circuitName">Circuit Name</Link></li>
          <li><Link to="/location">Location</Link></li>
        </ul>
       <switch>
        <Route path="/circuitName" component={CircuitNameList}/>
        <Route path="/location" component={LocationList}/></switch>
      </div>
    );
  }
}

export default Navigation;