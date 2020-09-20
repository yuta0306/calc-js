// Output sample
import Calus from './numjs.js';

// Declare the function
let f = x => x**2;

// Generate Calus instance
let cls = new Calus(f);
console.log(cls.f(1))

// sample execution
console.log(cls.grad(1));

console.log(cls.integrate(0, 1))