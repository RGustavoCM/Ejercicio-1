const date_str = '20210620T114039937Z';
//                2021-06-20T11:40:39.937Z

var pt1 = (date_str.match(/(....)(..)(.....)(..)(..)(....)/).slice(1,4).join('-'));
var pt2 = (date_str.match(/(....)(..)(.....)(..)(..)(....)/).slice(4,6).join(':'));
var pt3 = (date_str.match(/(....)(..)(.....)(..)(..)(....)/).slice(6,8).join(':'));
var final = pt1 + ":" + pt2 + "." + pt3;

var date1 = new Date(final);
var date2 = new Date(final).toUTCString();
var date3 = new Date(final).toISOString();

console.log(" Local Time :  " + date1);
console.log(" UTC Time :  " + date2);
console.log(" ISO-8601 format :  " + date3);


