/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
// function anagram(x, y) {
//     return undefined;
// }



function anagram(x, y){
    //проверим длину 2 слов(если не равны сразу ложь)
    if (x.length == 0 || y.length == 0){
        return false
    }
    if(x.length !== y.length){
        return false
    }
//берем первое слово, трасформируем его 1-нижний регистр, 2- разбиваем слово на массив слов 3-сортируем по порядку, 4-обьеденяем все буквы в строку
    let slovo1 = x.toLowerCase().split('').sort().join('');
    // console.log(slovo1)
// берем второе слово, трасформируем его 1-нижний регистр, 2- разбиваем слово на массив слов 3-сортируем по порядку, 4-обьеденяем все буквы в строку
    let slovo2 = y.toLowerCase().split('').sort().join('');
    // console.log(slovo2)
// возвращаем результат полного сравнения слов 1 и 2
    return slovo1 === slovo2
}
// console.log(anagram('Волос', 'Слово'))
// console.log(anagram('Живу', 'Вижу'))
// console.log(anagram('Живу', 'Вижыфы'))
// console.log(anagram('', ''))
module.exports = anagram;