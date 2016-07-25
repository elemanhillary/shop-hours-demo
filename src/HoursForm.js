import React, { Component } from 'react';

// Compoennt for form to add open hours
class HoursForm extends Component {
  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-body">

          <div className="row">
            <div className="col-md-12">
              {/* Button group (radio buttons) for selecting days of the week */}
              <div className="btn-group" data-toggle="buttons">
                {/* TODO: Change this into a map loop */}
                <label className="btn btn-default">
                  <input type="radio" name="weekdays" id="daybar-mon" autoComplete="off"/> Mon
                </label>
                <label className="btn btn-default">
                  <input type="radio" name="weekdays" id="daybar-tue" autoComplete="off"/> Tue
                </label>
                <label className="btn btn-default">
                  <input type="radio" name="weekdays" id="daybar-wed" autoComplete="off"/> Wed
                </label>
                <label className="btn btn-default">
                  <input type="radio" name="weekdays" id="daybar-thu" autoComplete="off"/> Thu
                </label>
                <label className="btn btn-default">
                  <input type="radio" name="weekdays" id="daybar-fri" autoComplete="off"/> Fri
                </label>
                <label className="btn btn-default">
                  <input type="radio" name="weekdays" id="daybar-sat" autoComplete="off"/> Sat
                </label>
                <label className="btn btn-default">
                  <input type="radio" name="weekdays" id="daybar-sun" autoComplete="off"/> Sun
                </label>
              </div>
            </div>
          </div>

          {/* From and To time dropdowns */}
          {/* TODO: Use a text field with autocomplete */}
          <div className="row" style={{marginTop:"1em"}}>
            <form className="form-inline">

              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="hours-from-select" style={{marginRight: "5px"}}>From: </label>
                  <HoursSelect id="hours-from-select"/>
                </div>
              </div>

              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="hours-to-select" style={{marginRight: "5px"}}>To: </label>
                  <HoursSelect id="hours-to-select"/>
                </div>
              </div>

            </form>
          </div>

          <button className="btn btn-primary pull-right">Add Hours</button>
        </div>
      </div>
    );
  }
}

// Component to wrap the hours select element (drop down)
class HoursSelect extends Component {
  render(){

    // Loop over the hours in a day and generate a key/value pair with
    // hour number (24hr format) as they key and 24-hour string (with am/pm) as the value
    var hours = {};
    var hour = 12;
    for (var i = 0; i < 24;i++) {
      hours[i] = hour + ':00 ' + (i > 11 ? 'pm' : 'am');
      hour = hour >= 12 ? 1 : hour + 1;
    }

    // Map over the key/value object generated above and return the finished select element
    return(
      <select className="form-control" id={this.props.id}>
        {Object.keys(hours).map(function(key) {
          return (
            <option key={key} name="key">{hours[key]}</option>
          );
        })}
      </select>
    );
  }
}

export default HoursForm;
