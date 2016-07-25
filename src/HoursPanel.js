import React, { Component } from 'react';

// Compoennt for form to add open hours
class HoursPanel extends Component {
  render(){

    var hoursList;
    if(this.props.hours === null) {
      hoursList = <p className="text-muted">No hours yet. Use the form to the right to add your shop's hours.</p>
    } else {
      hoursList = <HoursList hours={this.props.hours} />
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


// Responsible for showing the list group element, one row per day of the week
class HoursList extends Component {

  render(){
    var hoursRows = Object.keys(this.props.hours).map(function(key) {
      return (
        <HoursRow key={key} day={key} dayHours={this.props.hours[key]}/>
      );
    }.bind(this));

    return (
      <ul className="list-group">
        {hoursRows}
      </ul>
    );
  }
}

// Responsible for rendering one row in the hours list
class HoursRow extends Component {
  formatHour(hour){
    if(hour < 12){
      return (hour + "am")
    } else {
      return ((hour - 12) + "pm");
    }
  }
  render(){
    return (
      <li className="list-group-item"><strong>{this.props.day}:</strong> {this.formatHour(this.props.dayHours.start)} - {this.formatHour(this.props.dayHours.end)}</li>
    );
  }
}

export default HoursPanel;
