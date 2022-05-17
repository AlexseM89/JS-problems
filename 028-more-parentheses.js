/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
// function parentheses(value) {
//     return undefined;
// }

// module.exports = parentheses;
// let value = '({(){}<()>}){(<>)}<(<>)>'

// function parentheses(value) {
// let a= 0
// let b= 0
// let c= 0
// if(value[0]!=')'||value[0]!='}'||value[0]!='>'|| value.length ===0){
// for (let i = 0; i < value.length; i++) {
//         if(value[i]!='('&& value[i]!=')'&&value[i]!='{'&&value[i]!='}'){
//             // console.log(value[i])
//             // let str='('   
//             a++
//             // console.log(a1)
//         // }else if() {
//         //     // let str=')'   
//         //     strokaOne = value[i]=''
//         }else if(value[i]!='<'&& value[i]!='>'&&value[i]!='{'&&value[i]!='}'){
//             // console.log(value[i])
//             // let str='('   
//             b++
//         }else if(value[i]!='<'&& value[i]!='>'&&value[i]!='('&&value[i]!=')'){
//             // console.log(value[i])
//             // let str='('   
//             c++
//         }
//     }
//     let resA = a%2===0
//     let resB = b%2===0
//     let resC = c%2===0
//     if ((resA&&resB&&resC)===true){
//         console.log(true)
//         return true;
//     }else{
//         console.log(false) 
//         return false;
//     }
// }else{
//     console.log(false)
//     return false;
// }
// }


// console.log(resA)
// console.log(resB)
// console.log(resC)

// module.exports = parentheses;

function parentheses(value) {
// let value = '({(){<}()>}){(<>)}<(<>)>'
if(value.length === 1) return false;
let regxp1 = /[()]/g
let regxp2 = /[{}]/g
let regxp3 = /[<>]/g
let match1 = value.match(regxp1)
let match2 = value.match(regxp2)
let match3 = value.match(regxp3)
if(match1 === null) match1 = ' ';
if(match2 === null) match2 = ' ';
if(match3 === null) match3 = ' ';
// console.log(match1)
// console.log(match2)
// console.log(match3)

let one = match1[0]
let two = match2[0]
let free = match3[0]
switch (one) {
    case ')':    
      return false;
    //   break;
    default:
      false;
  }
  switch (two) {
    case '}':
      return false;
    //   break;
    default:
      false;
  }
  switch (free) {
    case '>':
      return false;
    //   break;
    default:
      false;
  }
  switch (free) {
    case ' ':
      return false;
    //   break;
    default:
      false;
  }

  return match3.length%2 != 0 ?  false : true;
  
//   return match2.length%2 != 0 ?  false : true;
//   return match1.length%2 != 0 ?  false : true;
//   if(match1.length%2 === 0 && match2.length%2 === 0 && match3.length%2 === 0) {
//       return true;
//     }else{
//         return false
    // };

//  if (match1.length === 0 && match2.length === 0 && match3.length === 0) {return false;}
}
module.exports = parentheses;
// console.log(parentheses('({(){<}()>}){(<>)}<(<>)>'))
// parentheses('<}')
// console.log(parentheses(' '))
// parentheses('{')
// parentheses('<')
// parentheses('>')
// parentheses('({(){<}()>}){(<>)}<(<>)>')
// parentheses('(){><}')
// parentheses('()}<>{')







// let a1 =0
// let a2 =0
// for (let i = 0; i < value.length; i++) {
//     if(value[i]==='('){
//         a1++
//         // console.log(a1)
//     }else{
//         a2++
//     }
// }
// if (value[0]== ")"||value== "") {
//     console.log(false)
//   }else{
//       console.log(a1===a2)}
// }
