
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

Dealership.prototype.getAllManu = function(){
    const manufacturers= stocks.map((car)=> {
        return car.manufacturer;
    })
    console.log(manufacturers);
}

Dealership.prototype.filterManu = function(manufacturer){
       const filteredItems = stocks.filter(a => {
        return a.manufacturer === manufacturer;
       })
       console.log(filteredItems)
    
};

Dealership.prototype.AddUpStock = function(){
   const total = stocks.reduce((accumulator, car) => {
    return accumulator + car.price;
    }, 0);
   console.log(total);
}

const v = new Dealership("V");
const Vcar = new Car ("Toyota", 100, "V88");

v.addCar(Vcar);
// console.log(Vcar);
v.getAllManu();
v.countCars();
v.filterManu("Toyota");
v.AddUpStock();
// console.log();
// v.filterManu(2);