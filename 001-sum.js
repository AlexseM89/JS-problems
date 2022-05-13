/**
 * Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел,
 * расположенных между 1 и N включительно.
 *
 * Пример:
 *
 * sum(0) === 1
 * sum(5) === 15
 *
 * Больше примеров в тестах
 *
 * @param {number} n целое число
 * @returns {number}
 */
function sum(n) {
   let sum = 0;
   if (n > 0) {
      for (let i = 1; i <= n; i++) {
         sum += i;
      }
      return sum;
   } else {
      return 1
   };
};

// console.log(sum(5));
// console.log(sum(-100));
// console.log(sum(11));

module.exports = sum;
