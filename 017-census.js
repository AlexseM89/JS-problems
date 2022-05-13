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
// function census(list) {
//     return -1;
// }

// module.exports = census;

// function census(list) {
//     var resultOne = list.findIndex(item => {
//         if (item.gender === 'Female') {
//             return
//         } 
//         else if (item.gender === 'Male') {
//             return 
//         }
//         return console.log(resultOne)
// })}

// console.log(census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]))
//  console.log(census([{ age: 40, gender: 'Female' }]))

// function census(list) {
//     var date = list
//     var cutySearch = 'Male'
//     var cityId;
// for(var i = 0; i < data.length; i++) {
//   if(data[i].name == cutySearch) {
//     cityId = i;
//     break;
//   }
// }
// console.log(cityId); 
// }
// console.log(census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]))



// var data = [{ id: 123, name: "г. Москва" }, { id: 124, name: "г. Немосква" }];
// var cutySearch = "г. Немосква";

// var cityId;
// for(var i = 0; i < data.length; i++) {
//   if(data[i].name == cutySearch) {
//     cityId = i;
//     break;
//   }
// }
// console.log(cityId);


// function census(list) {
//     var aaa = list
//     // .find(item => item.gender === "Male")
//      .reduce((acc, curr, i) => list[acc].age > curr.age ? acc : i, 0);
//     console.log(aaa)
// }

// let arr = [1, 5, 6, 9, 7];
// let index = arr.indexOf(Math.max(...arr));
// console.log(index);

// const data = [{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }, {age: 42, gender: 'Female'}]
// const max = Math.max(...data.map(item => item.age))
// let res = data.findIndex(item => item.gender === 'Male'&& max && item.age == max);
// console.log(res +1 )

// const data = [{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }, {age: 42, gender: 'Female'}];
function census(list) {
    list.forEach(item => {
        if(item.gender == 'Female')
        item.age = 0
    })
    // console.log(list)
    let max = Math.max(...list.map(item => item.age));
    let res = list.findIndex(item => max && item.age == max);
        if (max === 0){
            console.log(undefined)
        } else {console.log(res +1);
    }
    //    item.gender == 'Female')) {
    //    list.map(item => item.age = 0)
    //    console.log(list)
        //    let maxIndex = list.findIndex(item => max && item.age == max)
        //  let maxIndex = list.reduce((acc, curr, i) => list[acc].b > curr.b ? acc : i, 0)
    //    let maxIndex = Math.max(...list.map(item => item.age));
        // console.log(maxIndex );     
    // if (list.gender === 'Male') {
    //     // let max = Math.max(...list.map(item => item.age))
        
};

census([{ age: 92, gender: 'Male' }, { age: 88, gender: 'Male' }, { age: 149, gender: 'Female' }])
census([{ age: 40, gender: 'Female' }])
census([{ age: 42, gender: 'Male' }, { age: 40, gender: 'Male' }])


