/**
 * Витя из дома до работы добирается по кольцевой линии метро.
 *
 * Напишите функцию metro(x,y) вычисляющую минимальное количество промежуточных станций
 * (не считая станции посадки и высадки), которые необходимо проехать Вите,
 * если на кольцевой линии 13 станций.
 *
 * Пример:
 *
 * metro(1, 2) === 0
 * metro(1, 3) === 1
 * metro(13, 1) === 0
 * metro(1, 13) === 0
 *
 * @param {number} x – станция посадки
 * @param {number} y - станция высадки
 * @returns {number}
 */
function metro(x, y) { 
    let result;
    if (x > y) {
        const putA = (x - y) - 1;
        const putB = (y - 1) + (13 - x);
        if (putA > putB) {
            result = putB;
        } else {
            result = putA;
        };
    } else {
        const putA = (y - x) - 1;
        const putB = (x - 1) + (13 - y);
        if (putA > putB) {
            result = putB;
        } else {
            result = putA;
        };
    };
    return result;
};
module.exports = metro;