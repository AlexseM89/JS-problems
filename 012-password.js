// /**
//  * Пароль называется криптостойким,
//  * если он включает в себя хотя бы одну строчную английскую букву,
//  * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
//  * при этом его длина должна быть не менее 7 символов.
//  *
//  * Напишите функцию validatePassword(password) определяющую,
//  * является ли переданный пароль криптостойким.
//  *
//  * Пример:
//  *
//  * validatePassword('abc4DEFG') === true
//  * validatePassword('abcdefg') === false
//  * validatePassword('abcdefG') === false
//  * validatePassword('abcdef7') === false
//  *
//  * @param {string} password
//  * @returns {boolean}
//  */

function validatePassword(password) {
    return /[a-z]/.test(password) &&   // проверяем есть ли мелкие буквы
           /[A-Z]/.test(password) &&   // проверяем есть ли большие буквы
           /\d/.test(password) &&    // проверка есть ли цыфры
           password.length > 7 ;    // проверяем что бы дляна была более 7 символов
}

console.log(validatePassword('abc4DEFG'))
console.log(validatePassword('abcdefg'))
console.log(validatePassword('abcdefG'))
console.log(validatePassword('abc456F'))
console.log(validatePassword('abcdef7'))
console.log(validatePassword('ABCDEF7'))
console.log(validatePassword('abc456F'))

// module.exports = validatePassword;