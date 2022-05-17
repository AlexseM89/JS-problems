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
    for(var i=0, counter = 0, stroka = ''; i <= value.length; ++i) {
        if(value.charAt(i) == value.charAt(i+1)) counter++;
        else {
            //если следующий символ не такойже как предыдущий то аккумулятор +1 и итог к строке
            stroka += (counter ? counter + 1 : '') + value.charAt(i);
            counter = 0;
        }
        
    }
    return stroka;
}

// console.log(rle('AAABC'))
// console.log(rle('AAAaaB'))
module.exports = rle
