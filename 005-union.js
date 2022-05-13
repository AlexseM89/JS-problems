/**
 * Напишите функцию union(a, b) возвращающую упорядоченный по возрастанию массив
 * состоящий из чисел встречающихся в обоих наборах.
 *
 * Пример:
 *
 * union([1, 1, 3, 2, 5], [5, 3, 7, 7]) === [3, 5]
 * union([2, 4, 6, 8, 10, 12, 10, 8, 4, 2], [3, 6, 9, 12, 15, 18]) === [6, 12]
 * union([1, 2, 3], [11, 0, -1]) === []
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */

function union(a, b) {
// фильтер + инклюдес вернет нам массив с общими элементами
    let array = a.filter((number) => b.includes(number));
//сортируем массив по возврастанию    
    array.sort((a,b)=> a-b);
    let unikArray = array.filter((v, i, a) => a.indexOf(v) === i);
    return unikArray;
};

// console.log(union([1, 1, 5, 2, 3], [5, 3, 7, 7]));
// console.log(union([2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], [3, 6, 9, 12, 15, 18]));
// console.log(union([1, 2, 3], [11, 0, -1]));

module.exports = union;