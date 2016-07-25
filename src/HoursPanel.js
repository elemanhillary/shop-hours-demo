import React, { Component } from 'react';
import HoursList from './HoursList.js';

// Compoennt for form to add open hours
class HoursPanel extends Component {
    render(){

        var hoursList;
        if(this.props.hours === null) {
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
