const superhero = {
  name: 'The Bible',
  secretIdentity: 'samson',
  powers: ['super strength', 'fighting', 'lion killer'],
  weakness: 'women'
};

console.log(superhero);

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