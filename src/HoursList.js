import React, {Component} from 'react';
import HoursRow from './HoursRow.js'

// Responsible for showing the list group element, one row per day of the week
class HoursList extends Component {

    render(){
        var hoursRows = this.props.hours.map(function(hoursItem) {
            return (
                <HoursRow key={hoursItem.day + hoursItem.start} dayHours={hoursItem} removeHours={this.props.removeHours}/>
            );
        }.bind(this));

        return (
            <ul className="list-group">
                {hoursRows}
            </ul>
        );
    }
}

export default HoursList;
