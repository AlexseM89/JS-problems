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
    const strRight2Left = value.split('').reverse().join('');
    strLeft2Right = value;
    return strLeft2Right === strRight2Left;
};
module.exports = isPalindrome;
