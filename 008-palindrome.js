/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */

function isPalindrome(value) {
    let strR = value.split('').reverse().join('');
    strL = value;
    return strL === strR;
};

// isPalindrome('121');
// isPalindrome('boob');
// isPalindrome('true');

module.exports = isPalindrome;
