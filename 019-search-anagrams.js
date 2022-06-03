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
  const editStr = value.replace(/[\.\,\?]/g,'').split(' ');
  const editArray = editStr.map(elem =>elem.toLowerCase().split("").sort().join(""));
  const anagramsArray = editArray.filter((elem, _, array) => {
  const counter = array.reduce((accumulator, currentValue) => elem === currentValue ? ++accumulator : accumulator, 0)
    return counter > 1 || false
  }); 
  const finalyAnagramArr = editStr.filter(elem => anagramsArray.includes(elem.toLowerCase().split("").sort().join("")))
  return finalyAnagramArr.join(" ");
}
module.exports = searchAnagrams;

