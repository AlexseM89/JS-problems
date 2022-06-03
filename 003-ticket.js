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
	const sum123 = Number(number[0]) + Number(number[1]) + Number(number[2]);
	const sum456 = Number(number[3]) + Number(number[4]) + Number(number[5]);
	return sum123 == sum456;
};
module.exports = checkTicket;