// Jan 1 1970 00:00:00am

var moment = require('moment');

var longDateFormat = 'MMM Do, YYYY'
var timeFormat = 'H:mm a'

var createdAt = 12323425456;
var date = moment(createdAt);
console.log(date.format(longDateFormat + ' ' + timeFormat));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
