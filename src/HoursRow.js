import React, {Component} from 'react';

// Responsible for rendering one row in the hours list
class HoursRow extends Component {
    formatHour(hour) {
        if(hour === 0) {
            return ("12 am")
        } else if (hour < 12) {
            return (hour + " am");
        } else if (hour === 12) {
            return (hour + " pm");
        } else {
            return ((hour - 12) + " pm");
        }
    }
    handleRemove(){
        this.props.removeHours(this.props.dayHours);
    }
    render() {
        return (
            <li className="list-group-item">
                <strong>{this.props.dayHours.day}:</strong>
                {this.formatHour(this.props.dayHours.start)} - {this.formatHour(this.props.dayHours.end)}
                <button type="button" className="close" onClick={this.handleRemove.bind(this)}>&times;</button>
            </li>
        );
    }
}

export default HoursRow;
