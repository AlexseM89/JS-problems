/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    
   // let value = '(((()'
// console.log(value[0])
let a1 = 0
let a2 = 0
for (let i = 0; i < value.length; i++) {
    if(value[i]==='('){
        a1++
        // console.log(a1)
    }else{
        a2++
    }
}
if (value[0]== ")"||value== "") {
    console.log(false)
   
  }else{
      console.log(a1===a2)
   
    }

}

parentheses('')
parentheses('()()')
parentheses('(()())')
parentheses('(()')
parentheses(')')
parentheses('()')

// module.exports = parentheses;

//value[0]==')' || 


// +
// -
// *
// /
// =
// ==
// === 
// >
// <
// =>
// <=
// &&
// ||
// !
// !=
// !==
// delete
// **
// %
// ?:


// String 
// Number
// Boolean
// Object
// null
// undefined
// Symbol


