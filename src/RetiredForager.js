var RetiredForagerBee = function() {
ForagerBee.call(this);
this.age = 40;
this.job = 'gamble'
this.canFly = false;
this.color = 'grey';

};

RetiredForagerBee.prototype = Object.create(new ForagerBee());
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forage = function() {
  return "I am too old, let me play cards instead";
}
RetiredForagerBee.prototype.gamble = function(treasure) {
  //an always winning gamble method that allows the bee to add a treasure to the treasureChest
 this.treasureChest.push(treasure);
}