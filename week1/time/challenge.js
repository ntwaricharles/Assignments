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


// 3
// Add methods to the Clock object for formatting time
function Clock(hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;

  this.getFormattedTime = function() {
    return `${padZero(this.hours)}:${padZero(this.minutes)}:${padZero(this.seconds)}`;
  };

  this.get12HourTime = function() {
    let ampm = this.hours < 12 ? 'AM' : 'PM';
    let hours12 = this.hours % 12 || 12;
    return `${padZero(hours12)}:${padZero(this.minutes)}:${padZero(this.seconds)} ${ampm}`;
  };
}

// Helper function to pad zeros
function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}

let ourClock = new Clock(12, 30, 0);

console.log(`Formatted time: ${ourClock.getFormattedTime()}`);
console.log(`12-hour time: ${ourClock.get12HourTime()}`);