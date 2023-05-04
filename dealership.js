
const Car = require("./car.js");

const Dealership = function(name){
    this.name = name;
    stocks = [];
};

Dealership.prototype.addCar = function(Car){
        stocks.push(Car);
};

Dealership.prototype.countCars = function(){
    console.log(stocks.length);
};

Dealership.prototype.filterManu = function(manufacturers){
       const filtered = stocks.filter(stocks.Car.manufacturer.includes(manufacturers));
    
};

const v = new Dealership("V");
const Vcar = new Car ("Vdealer", 100, "V88");

v.addCar(Vcar);
console.log(Vcar);
v.countCars();
v.filterManu("Vdealer");
console.log();