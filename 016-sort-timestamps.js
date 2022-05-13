/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
// function sortTimestamps(list) {
//     return undefined;
// }

// function sortTimestamps(list) {
//     return new Date(list.date) - new Date(list.date);
// }

function sortTimestamps(list) {
    var itog = list.sort((a,b)=>{
        const dateA = new Date(a);
        const dateB = new Date(b);
   return dateA.getTime() < dateB.getTime() ? 1 : -1
   });
        return itog;
}
 console.log(sortTimestamps(['23:02:59', '02:07:00']))

// module.exports = sortTimestamps;
