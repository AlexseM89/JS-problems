/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в котор9ую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */

function getPower(n) {
    if (Math.log2(n) % 1 == 0) {
        return Math.log2(n);
    };
  };

//   console.log(getPower(256));
//   console.log(getPower(3));
//   console.log(getPower(8));
//   console.log(getPower(2));

  module.exports = getPower;