/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
  let arrSlovaAnagrams = [];
  let strokaBezZnakov = value.replace(/[\.\,\?]/g,'');
  let arrayStrokaBezZnakov = strokaBezZnakov.split(' ');
  arrSlovaAnagrams = arrayStrokaBezZnakov.map(function(elem){return elem.toLowerCase()});
  arrSlovaAnagrams = arrSlovaAnagrams.map(function(elem){ return elem.split("").sort().join("")})

  let arrayAnagrams = arrSlovaAnagrams.filter(function(elem, index, array){
    let counter = array.reduce(function(accumulator, currentValue, index, array){
      return  elem === currentValue ? ++accumulator : accumulator 
    },0)
    console.log(elem,counter)
    return counter > 1 ? true : false
  })
  console.log(arrayAnagrams, arrayStrokaBezZnakov, arrSlovaAnagrams)
  let filterarrayStrokaBezZnakov = arrayStrokaBezZnakov.filter(elem => arrayAnagrams.includes(elem.toLowerCase().split("").sort().join("")))
  let convertArray = filterarrayStrokaBezZnakov.join(" ");
  return convertArray;
}

console.log(searchAnagrams('Вижу апельсин значит живу. Спаниель'))









// function searchAnagrams(value) {
   
// // let value = 'Вижу апельсин значит живу. Спаниель';
// //стартовую строку value очищаем от точек и разбиываем по пробелам на массив строк
// var b = value.replace(/[\.\,\?]/g,'').split(' '); 
// // console.log(b);
// let resulMas = []
// // console.log(resulMas)
// for (let i = 0; i < b.length; i++) {
//     let firstWord = b[i].toLowerCase().split("").sort().join(""); // каждое слово из массива b берем создаем массив букв сортируем по алфавиту и снова делаем строку
//     // if (b[i].toLowerCase().split("").sort().join("") == firstWord) 
//     resulMas.push(firstWord); 
    
// }

// console.log(resulMas)



// // let filterWords = resulMas.filter((v,i,a)=>a.indexOf(v)==i); 
// // console.log(filterWords)
// let map = resulMas.reduce((a,val)=>{
//     a[val] = (a[val]? a[val]+1 :1) ;
//     return a;
//   },[]);
//   console.log(map)
//   var result;
//   Object.keys(map).forEach((key)=>{
//     if(map[key] === 1)
//       result = key;
//       // console.log(result)
//   });
//   // console.log(map)
// //   console.log(result)
// let ayaya = []
// for (const [key, value] of Object.entries(map)) {
//     if (value === 2) {
        
//       ayaya.push(key)
//         }
// let resulMas2=[]
//  for (let i=0; i<resulMas.length; i++){
// resulMas[i]===ayaya[i]
//  }       
// }
// console.log(ayaya)

// let  filter1 = resulMas.filter(i => ayaya.includes(i))
// console.log(filter1)

// //   console.log(index)
// // console.log(index)
// //   delete(b[index])
// //   console.log(b)

//   let itogAnagram = b.join(" ")
//   // console.log(itogAnagram)
//   return itogAnagram

// }
// console.log(searchAnagrams('Вижу апельсин значит живу. Спаниель'))
// console.log(searchAnagrams('Какой резон убирать зерно, если его негде хранить?'))



// function searchAnagrams(value) {
//   let b = value.replace(/[\.\,\?]/g,'').split(' '); 
//   console.log(b)
//   let itog = []
//   let resulMas = []
//   // let resulMasAl
//   for (let i = 0; i < b.length; i++) {
//     let firstWord = b[i].toLowerCase().split("").sort().join(""); // каждое слово из массива b берем создаем массив букв сортируем по алфавиту и снова делаем строку
//     // if (b[i].toLowerCase().split("").sort().join("") == firstWord) 
//     resulMas.push(firstWord); 
    
// }
// console.log(resulMas)
// let resulMasAl = resulMas.join(" ")
// console.log(resulMasAl)
// let counter = 0 
// for (let i=0 ; i<resulMas.length; i++){
//   console.log(resulMas)
//   let aaa = resulMas[i]
//   console.log(aaa)
//   let regex = new RegExp(aaa)
//   // console.log(regex)
//   let result = regex.test(resulMasAl)
//   console.log(result)
//   if (regex.test(resulMasAl)){
//     counter = counter + 1
//   }
//   if (counter>1){
//     itog.push(resulMas[i])
//   } else {
//     itog.push('')
//   }
//   counter = 0  
// }
// console.log(itog.join(" "))
// return itog.join("")
// }
// console.log(searchAnagrams('Вяжу и вижу'))
// // console.log(searchAnagrams('Вижу и вижу'))
// // console.log(searchAnagrams('Вижу апельсин значит живу. Спаниель'))

module.exports = searchAnagrams;

// for (let i = 0; i < resulMas.length-1; i++){
//     for (let k = resulMas.length-1; k !== 0; k--){
          
//             if (resulMas[i] === resulMas[k]){
//             console.log(resulMas[i])
//             booleanMassiv[i]=true
//                 } else {
//             booleanMassiv[i]=false
//             }
        
//     }
// }
//  console.log(resulMas)


// 1. Очистить данную строку от символов точка
// 1а. 'Вижу апельсин значит живу. Спаниель' ->'Вижу апельсин значит живу Спаниель'
// 2. Разложить Строку на массив подстрок
// 2a. 'Вижу апельсин значит живу Спаниель' -> [ 'Вижу', 'апельсин', 'значит', 'живу', 'Спаниель' ]
// 3. изменить каждый элемент массива строк согласно алфавиту
// 3a. [ 'Вижу', 'апельсин', 'значит', 'живу', 'Спаниель' ] -> [ 'вжиу', 'аеилнпсь', 'азинтч', 'вжиу', 'аеилнпсь' ]
// 4. Если у элемента есть дубль ставить на его место true если нет false 
// 4a. [ 'вжиу', 'аеилнпсь', 'азинтч', 'вжиу', 'аеилнпсь' ] -> [ true, true, false, true, true ]
// 5. Есть 2 массива b и Boolean Оставить в b только те что в масииве boolean имеют true 
// 5a.  [ 'Вижу', 'апельсин', 'значит', 'живу', 'Спаниель' ] -> [ 'Вижу', 'апельсин', 'живу', 'Спаниель' ]
// 6. Конвертнуть массив в строку и вывести её 
// 6a. [ 'Вижу', 'апельсин', 'живу', 'Спаниель' ] -> 'Вижу апельсин живу Спаниель'

// 5  boolean = [ true, true, false, true, true ]
//  Берём массив b = [ 'Вижу', 'апельсин', 'значит', 'живу', 'Спаниель' ] начинаем с 0 элемента 
//  let x = b[0]
//  if (boolean[0] === true) {

//  }
//  else{
//      b[0]=""}

// b[1] if (boolean[1] === true) {}else{b[1]==""}
// b[2] if (boolean[2] === true) {}else{b[2]==""}
// b[3] if (boolean[3] === true) {}else{b[3]==""}

// 4. Создаем пустой массив для сохранения результатов сравнения []
// Есть массив
// берем первый элемент сравниваем его с остальными(2,3,4,5) элементами массива
// если есть полное совпадение под тем же самым индексом элемента в результируещем массиве ставим true
// иначе false
// [ 'вжиу', 'аеилнпсь', 'азинтч', 'вжиу', 'аеилнпсь' ]->[ true ]
// берем второй элемент сравниваем его с остальными элементами(1,3,4,5) массива
// если есть полное совпадение под тем же самым индексом элемента в результируещем массиве ставим true
// иначе false
// ['вжиу', 'аеилнпсь', 'азинтч', 'вжиу', 'аеилнпсь' ]->[ true, true ]
// берем третий элемент сравниваем его с остальными(2,1,4,5) элементами массива
// если есть полное совпадение под тем же самым индексом элемента в результируещем массиве ставим true
// иначе false
// ['вжиу', 'аеилнпсь', 'азинтч', 'вжиу', 'аеилнпсь' ]->[ true, true, false ]
// берем четвертый элемент сравниваем его с остальными(2,3,1,5) элементами массива
// если есть полное совпадение под тем же самым индексом элемента в результируещем массиве ставим true
// иначе false
// ['вжиу', 'аеилнпсь', 'азинтч', 'вжиу', 'аеилнпсь' ]->[ true, true, false, true ]
// берем пятый элемент сравниваем его с остальными элементами(2,3,4,1) массива
// если есть полное совпадение под тем же самым индексом элемента в результируещем массиве ставим true
// иначе false
// ['вжиу', 'аеилнпсь', 'азинтч', 'вжиу', 'аеилнпсь' ]->[ true, true, false, true, true ]
// Записываем итоговый массив в переменную

