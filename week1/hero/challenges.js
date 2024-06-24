// 1: Object Creation Basics

const superhero = {
  name: 'The Bible',
  secretIdentity: 'samson',
  powers: ['super strength', 'fighting', 'lion killer'],
  weakness: 'women'
};

console.log(superhero);


// 2: Methods and Functionality

const superHero = {
  name: 'The Bible',
  secretIdentity: 'samson',
  powers: ['super strength', 'fighting', 'lion killer'],
  weakness: 'women',
  usePower: function(powerName) {
    if (this.powers.includes(powerName)) {
        console.log(`${this.name} uses ${powerName}!`);
    } 
    else {
        console.log(`${this.name} does not have the power.`);
    }
  },
  revealIdentity: function() {
    console.log(`The secret identity of ${this.name} is ${this.secretIdentity}!`);
  }
};

superHero.usePower();
superHero.revealIdentity();


// 3: Object Constructors

function Superhero(name, secretIdentity, powers, weakness) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
  this.usePower = function(powerName) {
     if (this.powers.includes(powerName)) {
        console.log(`${this.name} uses ${powerName}!`);
    } else {
        console.log(`${this.name} does not have the power.`);
    }
  };
  this.revealIdentity = function() {
    console.log(`The secret identity of ${this.name} is ${this.secretIdentity}!`);
  };
}

const superhero1 = new Superhero('The Bible', 'Samson', ['super strength', 'fight', 'lion killer'], 'women');
const superhero2 = new Superhero('The king', 'David', ['Faith', 'Sniper', 'Hunter'], 'women');

superhero1.usePower('uper strength');
superhero2.revealIdentity();


function Superhero(name, secretIdentity, powers, weakness) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
  this.usePower = function(powerName) {
    console.log(`${this.name} is using ${powerName}!`);
  };
  this.revealIdentity = function() {
    console.log(`The secret identity of ${this.name} is ${this.secretIdentity}!`);
  };
}

Superhero.prototype.fly = function() {
  console.log(`${this.name} is flying!`);
};

const superHero1 = new Superhero('The Bible', 'Samson', ['super strength', 'fight', 'lion killer'], 'women');
const superHero2 = new Superhero('The king', 'David', ['Faith', 'Sniper', 'Hunter'], 'women');

superHero1.fly();
superHero2.fly();


function theSuperHero(name, secretIdentity, powers, weakness) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
  this.usePower = function(powerName) {
    console.log(`${this.name} is using ${powerName}!`);
  };
  this.revealIdentity = function() {
    console.log(`The secret identity of ${this.name} is ${this.secretIdentity}!`);
  };
}

theSuperHero.prototype.fly = function() {
  console.log(`${this.name} is flying!`);
};

const superhero11 = new theSuperHero('The Bible', 'Samson', ['super strength', 'fight', 'lion killer'], 'women');
const superhero22 = new theSuperHero('The king', 'David', ['Faith', 'Sniper', 'Hunter'], 'women');

superhero11.fly();
superhero22.fly();

const superheroes = [
  { name: 'The Bible', powers: ['super strength', 'fight', 'lion killer'] },
  { name: 'The king', powers: ['Faith', 'Sniper', 'Hunter'] },
  { name: 'The Savior', powers: ['Healing', 'milacles', 'salvation'] }
];

const supervillains = [
  { name: 'The Ghost', powers: ['thief', 'gossiping'] },
  { name: 'The Lucifer', powers: ['dark magic', 'lie'] },
  { name: 'The Sin', powers: ['death', 'hopeless'] }
];

superheroes.forEach(hero => console.log(hero.name));

const superheroNames = superheroes.map(hero => hero.name);
console.log(superheroNames);

const darkMagicVillains = supervillains.filter(villain => villain.powers.includes('dark magic'));
console.log(darkMagicVillains);

