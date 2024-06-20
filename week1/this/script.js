'use strict';
//Task 1. Object Methods and this

let Person = {
  name: "Ntwari",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};

Person.greet();

// 1.2) Using call(), apply(), and bind()

let Person2 = {
  name: "Charles",
  age: 25
};

Person.greet.call(Person2);
Person.greet.apply(Person2);

let greetPerson2 = Person.greet.bind(Person2);
greetPerson2();



// Task 2: Event Handlers and this

const button = document.getElementById('myButton');

button.addEventListener('click', handleClick);

function handleClick() {
  console.log(`Button ID: ${this.id}, Text: ${this.textContent}`);
}

// using an arrow function for the event listener
button.addEventListener('click', () => {
  console.log(`Button ID: ${button.id}, Text: ${button.textContent}`);
});



// Task 3: Private Data with Closures and this

function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log(count);
    },
    getCount: function() {
      return count;
    }
  };
}

let counter = createCounter();
counter.increment();
console.log(counter.getCount());



// Task 4: Reusable Component with Closure and this

function createTimer(duration, elementId) {
  let remainingTime = duration;
  const element = document.getElementById(elementId);

  return function () {
    updateTimer(); 
    const sessionId = setInterval(updateTimer, 1000);
    
    // Function to update the timer display
    function updateTimer() {
      if (remainingTime >= 0) {
        element.textContent = `this session remains with ${remainingTime} seconds`;
        remainingTime--;
      } else {
        clearInterval(sessionId);
        console.log(`session for ID ${elementId} ended`);
      }
    }
  };
}

const session = createTimer(10, "sessionDisplay");
session.call(createTimer);

