import React, { Component } from 'react';

// Component to wrap the hours select element (drop down)
// TODO: Use a text box with autocomplete instead
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
            <select className="form-control" name={this.props.name} id={this.props.id}>
            {Object.keys(hours).map(function(key) {
                return (
                    <option key={key} value={key}>{hours[key]}</option>
                );
            })}
            </select>
        );
    }
}

// Compoennt for form to add open hours
class HoursForm extends Component {
    constructor(props){
        super(props);
        this.state = {selectedDay: null};

        this.handleSubmit = this.handleSubmit.bind(this); // Bind the correct syntax to the submit handler for later
    }

    // Click handler for the Add button. Gathers up data and calls the addHours callback on ShopHoursApp (passed in as a prop).
    handleSubmit(event){
        event.preventDefault();

        /* NB:
         * Accessing DOM node values directly isn't optimal, but works fine for
         * small cases. In a real app, I'd use event handlers and controlled
         * fields to store the values in the state and validate the form on the fly.
         */
        var weekday = event.target.elements.weekdays.value;
        var startTime = event.target.elements.startTime.value;
        var endTime = event.target.elements.endTime.value;

        // Check to make sure a day of the week was selected
        if (weekday === "") {
            return; // TODO: Show a friendly error message, highlight the day selection buttons
        }

        // Start time should be before end time
        if(parseInt(startTime, 10) >= parseInt(endTime, 10)) {
            return; // TODO: Show a friendly error message, highlight the start and end time fields
        }

        this.props.addHours({day: weekday, start: startTime, end: endTime});
    };

    // Main render function for the add form
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-12">
                                {/* Button group (radio buttons) for selecting days of the week */}
                                <div className="btn-group" data-toggle="buttons">
                                    {/* TODO: Change this into a map loop */}
                                    <label className="btn btn-default">
                                        <input type="radio" name="weekdays" value="Mon" id="daybar-mon" autoComplete="off"/> Mon
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="weekdays" value="Tus" id="daybar-tue" autoComplete="off"/> Tue
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="weekdays" value="Wed" id="daybar-wed" autoComplete="off"/> Wed
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="weekdays" value="Thu" id="daybar-thu" autoComplete="off"/> Thu
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="weekdays" value="Fri" id="daybar-fri" autoComplete="off"/> Fri
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="weekdays" value="Sat" id="daybar-sat" autoComplete="off"/> Sat
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="weekdays" value="Sun" id="daybar-sun" autoComplete="off"/> Sun
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* From and To time dropdowns */}
                        {/* TODO: Use a text field with autocomplete */}
                        <div className="row" style={{marginTop:"1em"}}>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label htmlFor="hours-from-select" style={{marginRight: "5px"}}>From: </label>
                                    <HoursSelect id="hours-from-select" name="startTime"/>
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="form-group">
                                    <label htmlFor="hours-to-select" style={{marginRight: "5px"}}>To: </label>
                                    <HoursSelect id="hours-to-select" name="endTime"/>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary pull-right">Add Hours</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default HoursForm;
