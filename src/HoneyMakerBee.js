var HoneyMakerBee = function() {
this.age = 10;
this.job = 'make honey';
this.honeyPot = 0;
};
// this.makeHoney = honeyPot++;
// this.giveHoney = honeyPot--;
HoneyMakerBee.prototype = Object.create(new Bee());
HoneyMakerBee.prototype.makeHoney = function() { this.honeyPot++}
HoneyMakerBee.prototype.giveHoney = function() { this.honeyPot--}

HoneyMakerBee.prototype.constructor = HoneyMakerBee;