const Dealership = require("./dealership");
const Car = require("./car")

const myDealership = new Dealership("CarDealer");
const toyota = new Car("Toyota", 2000, "V100");
const bmw = new Car("BMW", 4000, "V500");
const nissan = new Car("Nissan", 3500, "V200");

// myDealership.addCar(toyota);
// myDealership.addCar(bmw);
// myDealership.addCar(nissan);


test("can add cars to the dealership", () => {
    myDealership.addCar(toyota);
    myDealership.addCar(bmw);
    myDealership.addCar(nissan);

    const expected = [{ manufacturer: 'Toyota', price: 2000, engine: 'V100' }, { manufacturer: 'BMW', price: 4000, engine: 'V500' }, { manufacturer: 'Nissan', price: 3500, engine: 'V200' }];
    const actual = myDealership.stocks;

    expect(actual).toEqual(expected);
});