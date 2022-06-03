/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
    const dateCorrectFormat = date.slice(6)+ date.slice(2,6)+date.slice(0,2);
    const dat = Date.parse(dateCorrectFormat);
    const itog = dat + (1209600000);
    const vacantionFinish = new Date(itog);
    const year = vacantionFinish.getFullYear().toString();
    const mounth = vacantionFinish.getMonth() + 1
    const mounth2= mounth.toString();
    let mounth3;
    if (mounth2.length === 1) {
        mounth3 = '0'+ mounth2[0];
    } else {
        mounth3 = mounth2;
    };
    const day = vacantionFinish.getDate().toString();
    let day3;
    if (day.length === 1) {
        day3 = '0'+ day[0];
    } else {
        day3 = day;
    };
    return day3+'.'+mounth3+'.'+year
};
module.exports = vacation;
