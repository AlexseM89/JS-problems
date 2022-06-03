/**
 * Лёня пишет код максимально коротко. Чтобы конвертировать массив строк в числа он написал следующий код:
 *
 * array.map(parseInt)
 *
 * Но что-то пошло не так и в результате получаются совсем не те числа, что ожидает Лёня.
 *
 * Разбиритесь, что не так с Лёниным кодом и напишите функцию map(array)
 * в которой будет исправленна эта проблема.
 *
 * Пример:
 *
 * map(['0', '1', '2']) === [0, 1, 2]
 *
 * @param {string[]} array
 * @returns {number[]}
 */
function map(array = []) {
    return array.map(function(element, index, array) {
                        return parseInt(element)});
};
module.exports = map;
