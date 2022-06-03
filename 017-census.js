/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {object[]} list
 * @returns {undefined|number}
 */
function census(list) {
    list.forEach(item => {
        if (item.gender == 'Female') item.age = 0;
    });
    const maxAge = Math.max(...list.map(item => item.age));
    const result = list.findIndex(item => maxAge && item.age == maxAge);
        if (maxAge === 0) {
            return undefined;
        } else {
            return result + 1
        }; 
};
module.exports = census;


