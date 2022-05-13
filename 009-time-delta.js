/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */

function getTimeDelta(x, y) {
        let timeHX = x[0]+x[1];
        let timeHY = y[0]+y[1];
        let timeMX = x[3]+x[4];
        let timeMY = y[3]+y[4];
        let timeSX = x[6]+x[7];
        let timeSY = y[6]+y[7];
        // console.log(timeHX)
        let timeHF = Number(timeHY) - Number(timeHX);
        // console.log(timeHF)
        let timeMF = Number(timeMY) - Number(timeMX);
        let timeSF = Number(timeSY) - Number(timeSX);
        let itog = timeHF*3600 + timeMF*60 + timeSF;
  return itog;
};

// console.log(getTimeDelta('00:00:00', '00:00:01'));
// console.log(getTimeDelta('01:01:01', '02:02:02'));
// console.log(getTimeDelta('01:19:30', '01:20:20'));

module.exports = getTimeDelta;