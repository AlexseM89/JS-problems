/**
 *
 * Петя, Катя и Сережа делают из бумаги журавликов.
 * Вместе они сделали X журавликов. Сколько журавликов сделал каждый ребенок, если известно,
 * что Петя и Сережа сделали одинаковое количество журавликов,
 * а Катя сделала в два раза больше журавликов, чем Петя и Сережа вместе?
 *
 * Напишите функцию computeOrizurus(total) которая вычислит
 * сколько журавликов сделал каждый ребенок.
 *
 * Пример:
 *
 * computeOrizurus(6) === [1, 4, 1]
 * computeOrizurus(24) === [4, 16, 4]
 * computeOrizurus(11) === [1, 9, 1]
 *
 * @param {total} общее количество сделанных журавликов
 * @returns {number[]} массив чисел, где первый элемент это количество журавликов сделанных Петей,
 * второй элемент – Катей, третий – Сережей
 */

function computeOrizurus(total) {
    let totalF = [];
    let petr = total/6;
    let serg = total/6;
    let katya = ((total/6)*4);
    totalF[0] = petr;
    totalF[1] = katya;
    totalF[2] = serg;
    return totalF;
};

// console.log(computeOrizurus(6))
// console.log(computeOrizurus(24))
// console.log(computeOrizurus(12))
// console.log(computeOrizurus(18))

module.exports = computeOrizurus;