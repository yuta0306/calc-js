export default class Calus {
    constructor(f=null, h=1e-5) {
        this.f = f;
        this.h = h;
    }

    set_f = f => {
        this.f = f;
    }
    reset_f = () => {
        this.f = null;
    }

    set_h = h => {
        this.h = h;
    }
    reset_h = () => {
        this.h = 1e-5;
    }

    diff = (x) => {
        try {
            let f = this.f,
                h = this.h;

            return (f(x+h) - f(x-h) / 2*h);
        } catch (TypeError) {
            console.error('Function does not exist: please, execute set_f.');
            return false;
        }
    }

    partdiff = (par, ...variable) => {
        try {
            let f = this.f,
                h = this.h;

            variable[par] = variable[par] + h;

            return (f(...variable) - f(...variable) / 2*h);
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
            let f = this.f;

            for (let i=from_x; i<to_x; i+=dx) stack +=f(i)*dx;

            return stack;
        } catch (TypeError) {
            console.error('Function does not exist: please, execute set_f.')
            return false;
        }
    }
}