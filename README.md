# calc-js

This is the calculation library for *JavaScript*.

## Works

Now, You can calculate real number calculus.

## Usage

1. git clone.

2. import *Calus* from *numjs*.

### Sample Code

```js
// Output sample
import Calus from './numjs.js';

// Declare the function
let f = x => x**2;

// Generate Calus instance
let cls = new Calus(f);

// sample execution
console.log(cls.grad(1));
    //-> 1.000001500002

console.log(cls.integrate(0, 1))
    //-> 0.33333283333399866
```

### Error

If the class Calus doesn't have any function, you can see *Function does not exist: please, execute set_f.*

In that case, you can resolve this problem by execution *Calus.set_f(function)*