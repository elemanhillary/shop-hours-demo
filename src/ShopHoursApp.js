import React, { Component } from 'react';
import HoursForm from './HoursForm';
//import logo from './logo.svg';
//import './App.css';

class ShopHoursApp extends Component {
  render() {
    return (
      <div className="App">
        <p className="intro">
          To get started, tell us the hours your shop is open.
        </p>
        <div className="row">
          <div className="col-md-4 col-md-offset-1">
            <HoursForm />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>Hours</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopHoursApp;
