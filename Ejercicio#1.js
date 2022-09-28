const moment = require('moment');

const date_str = '202209082014525070000';

var pt1 = (date_str.match(/(....)(..)(..)(..)/).slice(1,4).join('/'));
var pt2 = (date_str.match(/(....)(..)(..)(..)(..)(..)(..)/).slice(4,7).join(':'));

var final = pt1 + " " +pt2;
const format1 = "YYYY-MM-DD HH:mm:ss"
const format2 = "YYYY-MM-DD"
var date1 = new Date(final);
var date2 = new Date(pt1);

const dateTime1 = moment(date1).format(format1);
const dateTime2 = moment(date2).format(format2);

console.log(dateTime1);
console.log(dateTime2);
