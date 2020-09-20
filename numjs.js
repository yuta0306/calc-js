class Calus {
    constructor(f=null) {
        this.f = f;
    }

    set_f = f => {
        this.f = f;
    }

    grad = (x=0, h=1e-6) => {
        try {
            f = this.f;
            return (f(x+h) - f(x-h) / 2*h);
        } catch (TypeError) {
            console.error('Function does not exist: please, execute set_f.');
            return false;
        }
        
    }

    integrate = (from_x=null, to_x=null, dx=1e-6) => {
        let stack = 0;
        
        if ((from_x == null) || (to_x == null)) {
            console.error('You must set arguments "from_x" and "to_x"');
            return false;
        }

        try {
            f = this.f;
            for (let i=from_x; i<to_x; i+=dx) stack +=f(i)*dx;

            return stack;
        } catch (TypeError) {
            console.error('Function does not exist: please, execute set_f.')
            return false;
        }
    }
}

// Declare the function
let f = x => x**2;

// Generate Numjs instance
let numjs = new Calus(f);

// sample execution
console.log(numjs.grad(1));

console.log(numjs.integrate(0, 1))