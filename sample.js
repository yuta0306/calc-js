// Output sample
import Calus from './numjs.js';

// Declare the function
let f = x => x**2;

// Generate Calus instance
let cls = new Calus(f);
console.log(cls.f(1))

// sample execution
console.log(cls.diff(1));

console.log(cls.integrate(0, 1))

let part_f = (x, y) => x**2 + y**2;
let part_cls = new Calus(part_f);
console.log(part_cls.f(1, 1))

// sample execution
console.log(part_cls.partdiff(0, 1, 1));
console.log(part_cls.totaldiff(1, 1));