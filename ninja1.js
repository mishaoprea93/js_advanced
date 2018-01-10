function Ninja(name) {

    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    this.sayName = function() {
        console.log("My ninja name is ", this.name)
        return "My ninja name is " + this.name;
    }
    this.showStats = function() {
        console.log("name: " + this.name + " ,health: " + this.health + " ,speed: " + this.speed + " ,strength: " + this.strength);
        return this;
    }
    this.drinkSake = function() {
        this.health += 10;
    }
    this.punch = function() {

    }

}

n1 = new Ninja("Mihail");
n2 = new Ninja("Ghenadie");

n1.drinkSake();
n1.sayName();
n1.showStats();