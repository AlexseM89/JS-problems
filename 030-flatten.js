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
// function flatten(array) {
//     // let arr4 = array
//     let a = array.flat(Infinity)
// console.log(a)
//     return a;
// }
// flatten([1, [2, 3]])
// flatten([1, [2, [3, 4]]])
// flatten([[], [[]], [[], [[[]]]]])
// flatten([1, [2, [3, [4]], 5]])
// module.exports = flatten;

function flatten(array) {
    let result = array.toString().replace(/[\,]/g,' ').split(' ').filter((elem)=> elem !='').map(elem=>Number(elem))
    return result
}
module.exports = flatten;
// console.log(flatten([1, [2, 3]]))
 // let numArray = str.filter((elem)=> elem !='').map(elem=>Number(elem))
 // return numArray.map(elem=>Number(elem))
// console.log(flatten([[], [[]], [[], [[[]]]]]))
