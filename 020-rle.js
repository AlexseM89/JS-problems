/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
// module.exports = rle;

function rle(value) {
    // идем цыклом по строке и имеем аккумулятор и пустую строку итог
    for(let i=0, a = 0, stroka = ''; i <= value.length; ++i) {
        if(value.charAt(i) == value.charAt(i+1)) a++;
        else {
            //если следующий символ не такойже как предыдущий то аккумулятор +1 и итог к строке
            stroka += value.charAt(i) + (a ? a + 1 : '');
            a = 0;
        }
    }
    return stroka;
}

console.log(rle('AAABC'))
console.log(rle('AAAaaB'))
// module.exports = rle
