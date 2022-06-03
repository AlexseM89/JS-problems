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
  const a = ((5 * Math.pow(value, 2)) + 4);
  const b = ((5 * Math.pow(value, 2)) - 4);
  const resultA = Math.sqrt(a) % 1 == 0;
  const resultB = Math.sqrt(b) % 1 == 0;
  const fib = function fibonacci(n) {
      if (n == 0) {
        return 0;
      } else {
      let a = 1;        
      let b = 1;        
      for (let i = 3; i <= n; i++) {   
        let c = a + b;     
        a = b;            
        b = c;            
      };
        return b;
      };
  };
  if (resultA || resultB) {
    for (i = 0; i < 100 ; i++) {
      if (fib(i) === value) {
        return i;
      };
    };
  };
};
module.exports = isFibonacci;