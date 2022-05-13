/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */

function checkTicket(number) {
//преобразуем каждую цыфру по типу в число	
	let sum123 = Number(number[0]) + Number(number[1]) + Number(number[2]);
//   console.log(sum123)
	let sum456 = Number(number[3]) + Number(number[4]) + Number(number[5]);
	
	return sum123 == sum456;
};

// console.log(checkTicket('005212'))
// console.log(checkTicket('133700'))
// console.log(checkTicket('123032'))

module.exports = checkTicket;