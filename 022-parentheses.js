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
  let result;  
  let a1 = 0;
  let a2 = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i]==='(') {
        a1++;
    } else {
        a2++
    };
  };
  if (value[0]== ")" || value== "" || value[value.length-1] == "(") {
   return result = false;
  } else {
      return result = a1===a2;
  };
};
module.exports = parentheses;

