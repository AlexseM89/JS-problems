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
function parentheses(value) {
  if (value.length === 1) return false;
  const regxp1 = /[()]/g;
  const regxp2 = /[{}]/g;
  const regxp3 = /[<>]/g;
  let match1 = value.match(regxp1);
  let match2 = value.match(regxp2);
  let match3 = value.match(regxp3);
  if (match1 === null) match1 = ' ';
  if (match2 === null) match2 = ' ';
  if (match3 === null) match3 = ' ';
  let one = match1[0];
  let two = match2[0];
  let free = match3[0];
  switch (one) {
    case ')':    
      return false;
    default:
      false;
  };
  switch (two) {
    case '}':
      return false;
    default:
      false;
  };
  switch (free) {
    case '>':
      return false;
    default:
      false;
  };
  switch (free) {
    case ' ':
      return false;
    default:
      false;
  };
  return match3.length%2 != 0 ?  false : true;
}
module.exports = parentheses;
