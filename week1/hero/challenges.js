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
    console.log(`${this.name} is using ${powerName}!`);
  },
  revealIdentity: function() {
    console.log(`The secret identity of ${this.name} is ${this.secretIdentity}!`);
  }
};

superHero.usePower('fighting');
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

superhero1.usePower();
superhero2.revealIdentity();

