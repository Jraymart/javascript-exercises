const fibonacci = function(term) {
    //fibonacci sequence is x(n) = x(n-1) + x(n-2)
    if (term < 0){
        return "OOPS";
    }
    const fib = [0,1];
    for (let i = 2; i <= term; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[term];
};

// Do not edit below this line
module.exports = fibonacci;
