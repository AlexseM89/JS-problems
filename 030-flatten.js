/**
 * Напишите функцию flatten(array) которая делает вложенный массив плоским
 *
 * Пример:
 *
 * flatten([1, [2, 3]]) === [1, 2, 3]
 * flatten([1, [2, [3, 4]]]) === [1, 2, 3, 4]
 *
 * @param {Array.<number|[]>} array
 * @returns {number[]}
 */
function flatten(array) {
    // let arr4 = array
    let a = array.flat(Infinity)
console.log(a)
    return a;
}
flatten([1, [2, 3]])
flatten([1, [2, [3, 4]]])
flatten([[], [[]], [[], [[[]]]]])
flatten([1, [2, [3, [4]], 5]])
// module.exports = flatten;


