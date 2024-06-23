// 1
let currentTime = new Date();
console.log(`Current time: ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`);


//2
// Define a Clock constructor function
function Clock(hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
}

// Create a clock instance
let myClock = new Clock(12, 30, 0);

console.log(`My clock: ${myClock.hours}:${myClock.minutes}:${myClock.seconds}`);