"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.aceleration = function () {
  this.speed = this.speed + 10;
  console.log(`${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
bmw.aceleration();
bmw.brake();
bmw.aceleration();
bmw.brake();
bmw.aceleration();
bmw.brake();
bmw.aceleration();
bmw.brake();

console.log(`--------------------------------------------------`);

const mercedes = new Car("mercedes", 95);
mercedes.aceleration();
mercedes.brake();
mercedes.aceleration();
mercedes.brake();
mercedes.aceleration();
mercedes.brake();
mercedes.aceleration();
mercedes.brake();
