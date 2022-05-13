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
// function metro(x, y) {
//     return undefined;
// }


function metro(x, y) {
   

    if (x>y){
        let putA = (x-y)-1
        let putB = (y-1)+(13-x)
        if (putA>putB){
            console.log(putB)
        }else{
            console.log(putA)
        }
    }else{
        let putA = (y-x)-1
        let putB = (x-1)+(13-y)
        if (putA>putB){
            console.log(putB)
        }else{
            console.log(putA)
        }
    };
}
// console.log(metro(1, 2))
metro(1, 2)
metro(1, 3)
metro(13, 1)
metro(1, 13)
metro(1, 7)
metro(1, 8)
metro(13, 6)
metro(13, 7)
metro(11, 7)
metro(2, 7)

module.exports = metro;