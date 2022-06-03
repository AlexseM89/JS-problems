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
        const timeHX = x[0]+x[1];
        const timeHY = y[0]+y[1];
        const timeMX = x[3]+x[4];
        const timeMY = y[3]+y[4];
        const timeSX = x[6]+x[7];
        const timeSY = y[6]+y[7];
        const timeHF = Number(timeHY) - Number(timeHX);
        const timeMF = Number(timeMY) - Number(timeMX);
        const timeSF = Number(timeSY) - Number(timeSX);
        const itog = timeHF*3600 + timeMF*60 + timeSF;
  return itog;
};
module.exports = getTimeDelta;