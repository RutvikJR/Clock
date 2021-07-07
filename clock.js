var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330; // IST offset UTC +5:30 

var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

// ISTTime now represents the time in IST coordinates

var h = ISTTime.getHours();
if (h > 12) {
    h = h - 12;
}
var m = ISTTime.getMinutes();

// console.log(hoursIST);
// console.log(minutesIST);

var s = ISTTime.getSeconds();
// console.log(s);
var sr = Math.floor((s * 360) / 60);
var mr = Math.floor((m * 360) / 60);
var hr = Math.floor((h * 360) / 12);
sr = -90;
mr = mr - 90;
hr = hr - 90 + (Math.floor(mr / 12));
var sh = document.querySelector('.secondhand');
var mh = document.querySelector('.minutehand');
var hh = document.querySelector('.hourhand');
mh.style.transform = "rotate(" + mr + "deg)";
hh.style.transform = "rotate(" + hr + "deg)";

setInterval(() => {
    sh.style.transform = "rotate(" + sr + "deg)";
    sr = sr + 6;
    // if ((sr % 360) - 270 === 0) {


    // }
    // if (mr % 360 === 0) {
    // }
}, 1000);

setInterval(() => {
    mr = mr + 6;
    mh.style.transform = "rotate(" + mr + "deg)";
}, 60000);

setInterval(() => {
    hr = hr + 6;
    hh.style.transform = "rotate(" + hr + "deg)";

}, 720000);
// console.log(s);
// console.log(m);
// console.log(h);


// console.log(s);