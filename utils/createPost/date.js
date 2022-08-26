let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();

// format mm-dd
if (month <= 9) month = "0" + month;
if (day <= 9) day = "0" + day;

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// format hh-mm-ss
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;
let dateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

module.exports = dateString;
