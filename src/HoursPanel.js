import React, { Component } from 'react';
import HoursList from './HoursList.js';

// Component to show a panel listing the open hours
class HoursPanel extends Component {
    render(){

        // Check for an empty list (size of the array == 0), and show a friendly message if empty
        var hoursList;
        if(this.props.hours.length <= 0) {
            hoursList = <p className="text-muted">No hours yet. Use the form to the right to add your shop's hours.</p>
        } else {
            hoursList = <HoursList hours={this.props.hours} removeHours={this.props.removeHours}/>
        }

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    My shop is open:
                    {hoursList}
                </div>
            </div>
        );
    }
}

export default HoursPanel;
