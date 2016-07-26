# Shop Hours Demo
A demo UI for setting a shop's operating hours using React.

Live Demo: https://jlbooker.github.io/shop-hours-demo/

Frameworks Used:
 * React (v 15.2.1), created using the [react-create-app](https://github.com/facebookincubator/create-react-app) cli tool (just released last week, pretty cool!)
  * Includes Webpack, Bable, eslint
 * Bootstrap 3 (I know about v4-alpha, but am still more familiar with v3)

## Notes
These are some things I'd do to improve the interface, but chose to forgo in the interest of time.
* For better usability, the 'From' and 'To' time fields should ideally be text boxes with augosuggest. The current select boxes are likely not flexible enough (no half-hour or 15-minute intervals).
* Show a notification when an overlapping set of hours is combined
* Consider using a time library (such as Moment.js) to hadle formatting times for localization.
* Add aria attributes for better accessibility.
