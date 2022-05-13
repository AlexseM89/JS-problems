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
// function vacation(date) {
//     return undefined;
// }

// module.exports = vacation;
// function vacation(date) {
// let dat = Date.parse(date)
// let itog = dat+(1301300000)
// let vacantionFinish = new Date(itog)
// console.log(vacantionFinish)
// }

// vacation('01.01.2020')
// vacation('01.01.2020')
// var theBigDay = new Date('July 1, 1999');
// var sameAsBigDay = new Date();
// console.log(sameAsBigDay);
// let date = '27.01.2020'
// let date = '01.01.2020'
function vacation(date) {
let dateCorrectFormat = date.slice(6)+ date.slice(2,6)+date.slice(0,2)
let dat = Date.parse(dateCorrectFormat)
// console.log(dat)
let itog = dat+(1209600000)
let vacantionFinish = new Date(itog)
// console.log(vacantionFinish)
let year = vacantionFinish.getFullYear().toString()
// console.log(year)
let mounth = vacantionFinish.getMonth()+1
let mounth2= mounth.toString()
// console.log(mounth2.length)
let mounth3
if (mounth2.length===1){
        mounth3 = '0'+ mounth2[0]
}else{
    mounth3 = mounth2
}
// console.log(mounth)
let day = vacantionFinish.getDate().toString()
let day3
if (day.length===1){
    day3 = '0'+ day[0]
}else{
    day3 = day
}
// console.log(day)
let result = day3+'.'+mounth3+'.'+year
return result
}
console.log(vacation('01.01.2020'))
console.log(vacation('27.01.2020'))
console.log(vacation('24.02.2020'))
console.log(vacation('29.02.2020'))
console.log(vacation('16.11.2020'))
console.log(vacation('22.02.2021'))
console.log(vacation('30.12.2019'))

module.exports = vacation;
