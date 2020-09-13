let func = (x) => x**2 + 2*x + 1;

const grad = (f, x) => {
    h = 0.0001
    return (f(x+h) - f(x-h)) / 2*h
}

console.log(grad(func, 2))