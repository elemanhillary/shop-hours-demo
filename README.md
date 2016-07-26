# Shop Hours Demo
A demo UI for setting a shop's operating hours using React.

Live Demo: https://jlbooker.github.io/shop-hours-demo/

Frameworks Used:
 * React (v 15.2.1), created using the [react-create-app](https://github.com/facebookincubator/create-react-app) cli tool (just released last week, pretty cool!)
  * Includes Webpack, Bable, eslint
 * Bootstrap 3 (I know about v4-alpha, but am still more familiar with v3)

## Notes
These are some things I'd do to improve the interface, but chose to forgo in the interest of time.
* For better usability, the 'From' and 'To' time fields should ideally be text boxes with autosuggest. The current select boxes are likely not flexible enough (no half-hour or 15-minute intervals).
* I only did bare-bones form validation. In a real app, I'd notification and highlight the corresponding fields. (Would need to use controlled fields and state in HoursForm.js to validate the form on the fly. Not hard, just extra time/complication.)
* Show a notification when an overlapping set of hours is combined
* Consider using a time library (such as Moment.js) to handle formatting times for localization.
* Add aria attributes for better accessibility.
