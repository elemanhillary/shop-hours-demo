import React, {Component} from 'react';
import HoursForm from './HoursForm';
import HoursPanel from './HoursPanel';

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

        // Convert incoming hours to integer values for easy comparison
        hours.start = parseInt(hours.start, 10);
        hours.end = parseInt(hours.end, 10);

        // Check for an overlapping time period, and if found then combine the new and existing ranges
        var hrsIndex = hoursList.findIndex(function(element, index, arr){
            // If the new hours range is on the same day AND starts before an existing rage but ends *after* the beginning of the existing range, then we have an overlap (or vice versa)
            if(hours.day === element.day && ((hours.start > element.start && hours.start < element.end) || (hours.end > element.start && hours.end < element.end))){
                return true;
            } else {
                return false;
            }
        });

        if(hrsIndex > -1){
            // We found an overlap

            // Take the earliest start time
            var newStartTime = hours.start < hoursList[hrsIndex].start ? hours.start : hoursList[hrsIndex].start;

            // Take the latest end time
            var newEndTime = hours.end > hoursList[hrsIndex].end ? hours.end : hoursList[hrsIndex].end;

            // Make a new hours object and replace the existing object at the index where it was found
            hoursList[hrsIndex] = {day: hours.day, start: newStartTime, end: newEndTime};
        } else{
            // No overlap, so just add it onto the array
            console.log('No overlap');
            hoursList.push(hours);
        }

        // Update the state with the new hours array
        this.setState({hoursList: hoursList});

        // TODO: Save to a persistent datastore here
    }

    /* Callback for the HoursPanel component.
     * Removes a set of begin/end hours from the state
     */
    removeHours(hours){
        var hoursList = this.state.hoursList;

        // Find the index of the matching hours to be removed
        var hrsIndex = hoursList.findIndex(function(element, index, arr){
            if(hours.day === element.day && hours.start === element.start && hours.end === element.end){
                return true;
            } else {
                return false;
            }
        });

        // Remove the matching element
        hoursList.splice(hrsIndex, 1);

        // Update the state
        this.setState({hoursList: hoursList})

        // TODO: Save to a persistent datastore here
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
