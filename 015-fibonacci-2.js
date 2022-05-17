/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
// function isFibonacci(value) {
//     return undefined;
// }

// module.exports = isFibonacci;

function isFibonacci(value) {
    // let fib;
    let a = ((5 * Math.pow(value, 2)) + 4);
    let b = ((5 * Math.pow(value, 2)) - 4);
    let resultA = Math.sqrt(a) % 1 == 0;
    let resultB = Math.sqrt(b) % 1 == 0;
console.log(resultA)
console.log(resultB)

let fib = function fibonacci(n){
    if(n == 0){
      return 0;
    } else {
      let a = 1;        //a = fib(1)
      let b = 1;        //b = fib(2)
    for (let i=3; i <= n; i++) {   // начинаем с 3 потому что 1 и2 уже известно выше
        let c = a + b;     // c= fib(3)
        a = b;            // теперь a = fib(2)
        b = c;            // а с = fib(3)
    };
    return b;
  }
}
    
if(resultA||resultB){
    for (i=0; i<100 ; i++) {
        if (fib(i)===value){
                    return i
                           }
}
}
}

// console.log(isFibonacci(2))
// console.log(isFibonacci(42))
// console.log(isFibonacci(33))
// console.log(isFibonacci(89))
// isFibonacci(1)
// isFibonacci(2)
module.exports = isFibonacci;