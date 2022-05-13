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
function parentheses(value) {
let a= 0
let b= 0
let c= 0
if(value[0]!=')'||value[0]!='}'||value[0]!='>'||value.length ===0){
for (let i = 0; i < value.length; i++) {
        if(value[i]!='('&& value[i]!=')'&&value[i]!='{'&&value[i]!='}'){
            // console.log(value[i])
            // let str='('   
            a++
            // console.log(a1)
        // }else if() {
        //     // let str=')'   
        //     strokaOne = value[i]=''
        }else if(value[i]!='<'&& value[i]!='>'&&value[i]!='{'&&value[i]!='}'){
            // console.log(value[i])
            // let str='('   
            b++
        }else if(value[i]!='<'&& value[i]!='>'&&value[i]!='('&&value[i]!=')'){
            // console.log(value[i])
            // let str='('   
            c++
        }
    }
    let resA = a%2===0
    let resB = b%2===0
    let resC = c%2===0
    if ((resA&&resB&&resC)===true){
        console.log(true)
        return true;
    }else{
        console.log(false) 
        return false;
    }
}else{
    console.log(false)
    return false;
}
}
parentheses('<>')
parentheses('<}')
parentheses('')
parentheses('{')
parentheses('<')
parentheses('>')
parentheses('({(){<}()>}){(<>)}<(<>)>')
parentheses('(){><}')
parentheses('()}<>{')

// console.log(resA)
// console.log(resB)
// console.log(resC)
module.exports = parentheses;










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
