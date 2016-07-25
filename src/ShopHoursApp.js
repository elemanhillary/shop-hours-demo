import React, { Component } from 'react';
import HoursForm from './HoursForm';
import HoursPanel from './HoursPanel';

//import logo from './logo.svg';
//import './App.css';

/**
 * Root Component for the Shop Hours App
 * Responsible for keeping the state (list of hours) and
 * rendering the overall structure.
 */
class ShopHoursApp extends Component {
  render() {
    // TODO: Use state instead of hard coding
    var hoursSet = {Mon: {start: 8, end: 17}}

    return (
      <div className="App">
        <div className="row">
          <div className="col-md-4 col-md-offset-2">
            <h1>Shop Hours Demo</h1>
            <p className="intro">To get started, tell us the hours your shop is open.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-2">
            <HoursPanel hours={hoursSet}/>
          </div>
          <div className="col-md-4">
            <HoursForm />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopHoursApp;
