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
function sortTimestamps(list) {
  let ar = [];
  let testTime = [];
  let reversTime = [];
  for (let i = 0; i < list.length; i += 1) {
    ar[i] = "2000/10/10 " + list[i];
  };
  for (let i = 0; i < ar.length; i++) {
    testTime[i] = new Date(ar[i]).getTime();  
  };
  const num = function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  };
  const milTime = testTime.sort(num)
  for (let i = 0; i < milTime.length; i++ ){
    reversTime[i]= (new Date(milTime[i])).toString()
  };
  return reversTime.map((num)=> num.slice(16,24))
};
module.exports = sortTimestamps;