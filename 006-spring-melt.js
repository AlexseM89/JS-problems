/**
 * Уставшие от необычно теплой зимы, жители решили узнать,
 * действительно ли это самая длинная оттепель за всю историю наблюдений за погодой.
 * Они обратились к синоптикам, а те, в свою очередь,
 * занялись исследованиями статистики за прошлые годы.
 * Их интересует, сколько дней длилась самая длинная оттепель.
 *
 * Напишите функцию getSpringMeltStreak(temperature) помогающую синоптикам вычислить самый длинный период,
 * в который среднесуточная температура ежедневно превышала 0 градусов Цельсия
 *
 * Пример:
 *
 * getSpringMeltStreak([-20, 30, -40, 50, 10, -10]) === 2
 * getSpringMeltStreak([10, 20, 30, 1, -10, 1, 2, 3]) === 4
 * getSpringMeltStreak([-10, 0, -10, 0, -10]) === 0
 *
 * @param {number[]} temperature массив чисел, где каждое – среднесуточная температура в соответствующий день
 * @returns {number}
 */

function getSpringMeltStreak(temperature) {
    let maxIndex = 0;       //максимальный индекс
    let maxLenght = 0;      //максимальная длинна искомого массива
    let currentLenght = 0;  //счетчик длинны искомого массива
    let currentIndex = 0;   //счетчик индекса

    for (let k=0; k<temperature.length; k++) {  //идем по массиву temperature
            if (temperature[k] > 0) {
// если значение элемента >0 счетчик длинны +1
                currentLenght++;
//начинается новая последовательность удовлетворяющая условию
//начальный индекс
            if (currentLenght == 1) {      
                currentIndex = k
            };
            } else {
                if (currentLenght > maxLenght) {    //если счетчик длины больше максимальной длинны
                    maxLenght = currentLenght;  // то сохраняем новое значение
                    maxIndex = currentIndex;    //присваеваем новый индекс
                    };
                currentLenght = 0 ;             //сброс счетчика
                };
    };
        if (maxLenght > 0) {
            console.log(maxLenght);
        } else {
            console.log(0); 
        };  
    return;
 };

 getSpringMeltStreak([10, 20, 30, 1, -10, 1, 2, 3])
 getSpringMeltStreak([-20, 30, -40, 50, 10, -10])
 getSpringMeltStreak([10, 20, 30, 0, -10, 5, 8, 1, 2, 3])
 getSpringMeltStreak([-10, 0, -10, 0, -10])

//  module.exports = getSpringMeltStreak;