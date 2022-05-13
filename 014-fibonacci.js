/**
 * Последовательностью Фибоначчи называется последовательность чисел
 * a0, a1, ..., an, ..., где
 * a0 = 0,
 * a1 = 1,
 * ak = ak-1 + ak-2 (k > 1).
 *
 * Напишите функцию fibonacci(n) вычисляющую n-ное число последовательности
 *
 * Пример:
 *
 * fibonacci(2) === 1
 * fibonacci(3) === 2
 * fibonacci(7) === 13
 *
 * @param {number} n >= 0
 * @returns {number}
 */
// function fibonacci(n) {
//     return undefined;
// }

// module.exports = fibonacci;


// function fibonacci(n) {
//     return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
//   }

//   console.log(fibonacci(2))
//   console.log(fibonacci(3))
//   console.log(fibonacci(7))
//   console.log(fibonacci(0))

  function fibonacci(n){
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
};

  // console.log(fibonacci(2))
  // console.log(fibonacci(3))
  // console.log(fibonacci(7))
  // console.log(fibonacci(10))
  // console.log(fibonacci(0))
  

module.exports = fibonacci;