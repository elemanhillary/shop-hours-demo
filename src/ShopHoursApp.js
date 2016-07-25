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
    // Constructor - Sets the inital state to an empty list of hours
    // Format of an item in the hoursList looks like: {day: 'Mon', start: 8, end: 14}
    constructor(props){
        super(props);
        this.state = {hoursList: []};

        // Bind the correct context to the callback methods
        this.addHours = this.addHours.bind(this);
        this.removeHours = this.removeHours.bind(this);
    }

    /* Callback for the HoursForm component.
    * Adds a set of begin/end hours to the state
    */
    addHours(hours){
        var hoursList = this.state.hoursList;
        hoursList.push(hours);
        this.setState({hoursList: hoursList});
    }

    /* Callback for the HoursPanel component.
    * Removes a set of begin/end hours from the state
    */
    removeHours(hours){

    }

    render() {
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
            <HoursPanel hours={this.state.hoursList} removeHours={this.removeHours}/>
            </div>
            <div className="col-md-4">
            <HoursForm addHours={this.addHours}/>
            </div>
            </div>
            </div>
        );
    }
}

export default ShopHoursApp;
