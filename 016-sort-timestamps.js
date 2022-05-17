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

// function sortTimestamps(list) {
//     let arr3 = list.map((elem)=> {
//         let h = list[elem]
//         hh = h.substring(0,2)
//         let m = list[elem].substring(3,5)
//         let s = list[elem].substring(6,8)

//         elem1 = new Date(1970,01,01,hh,m,s).valueOf()})


//     // if (list.length == 0) {
//     //      return list
//     //     } else if (list.length == 1){
//     //         return list
//     //     } else {
// // let aaa = function compareNumeric(a,b) {
// //     let dateA = new Date().getTime(a);
// //     let dateB = new Date().getTime(b)
// //     if (dateA>dateB) return 1;
// //     if (dateA==dateB) return 0;
// //     if (dateA<dateB) return -1;
// // }
// // let itog = list.sort(aaa)


// //     let itog = list.sort((a,b)=>{
// //         let dateA = new Date().getTime(a);
// //         // console.log(dateA)
// //         let dateB = new Date().getTime(b);
        
// //    return dateA < dateB ? 1 : -1;
// //    });

// // let arr = list.map((elem)=> {elem = new Date(0).getTime(elem)})


//    return arr3;
// // }
   
       
// }
// sortTimestamps(['23:02:59', '02:07:00'])
//  console.log(sortTimestamps(['19:00:00', '00:04:20', '00:59:59']))

// module.exports = sortTimestamps;
// let arr2 = ['19:00:00']

// let h = arr2[0].substring(0,2)
// let m = arr2[0].substring(3,5)
// let s = arr2[0].substring(6,8)

// console.log(h)
// console.log(m)
// console.log(arr3)
// console.log(new Date(1970-01-1).getTime('00:59:59'))
// console.log(new Date(1970-01-1).getTime('00:04:20'))
// console.log(new Date(1970-01-1).getTime('19:00:00'))
// console.log(new Date(1970-01-1).valueOf())
// console.log(new Date().valueOf('00:04:20'))
// console.log(new Date(1970,01,01,00,59,59).valueOf())
// console.log(new Date(1970,a,01,00,04,20).valueOf())

// function sortTimestamps(list) {
//     var itog = list.sort((a,b)=>{
//         const dateA = new Date(a);
//         const dateB = new Date(b);
//    return dateA.getTime() < dateB.getTime() ? 1 : -1
//    });
//         return itog;
// }




// console.log(sortTimestamps(['00:13:37', '00:04:20']))
// console.log(sortTimestamps(['23:02:59', '02:07:00']))
// console.log(sortTimestamps(['19:00:00', '00:04:20', '00:59:59']))

// let time = '19-00-00'
// console.log(time.valueOf())
function sortTimestamps(list) {
    // let testTime = '1970/02/01'
    let ar = []
    let testTime = []
    let reversTime = []
    // каждому элементу массива добавляем часть даты(произвольная дата выбрана мною)
    for (let i = 0; i < list.length; i += 1) {
        ar[i] = "2000/10/10 " + list[i];
      }
    //   console.log(ar)
    // каждый элемент массива переводиться в миллисекунды
      for (let i = 0; i < ar.length; i++) {
        testTime[i] = new Date(ar[i]).getTime()
        
      }
    //   console.log(testTime)
//функция которая сравнивает элементы между собой 
      let num = function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
      }
      //миллисекунды в массиве сортируем при помощи функции
      let milTime = testTime.sort(num)
    //   console.log(milTime)
// отсортированый массив обратно конвертируем в дату(строковые значения)
for (let i = 0; i < milTime.length; i++ ){
reversTime[i]= (new Date(milTime[i])).toString()
}
// console.log(reversTime)

// console.log(reversTime[0].slice(0,4))

// for (let j = 0; j < reversTime; j += 1){
//     finalArr[j] = (reversTime[j]).substring(0,4) 
    
// }
//редактирую массив строк, оставляю только то что нужно
return reversTime.map((num)=> num.slice(16,24))

}
module.exports = sortTimestamps;
// sortTimestamps(['19:00:00', '00:04:20', '00:59:59'])

// console.log(new Date(1970,01,1).getTime('00:59:59'))
// console.log(new Date(1970,01,1).getTime())