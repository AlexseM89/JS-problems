/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
// module.exports = hexToRgb;

function hexToRgb(color) {
    const lengthString = color.length
    if (lengthString===7) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
        const onePart = parseInt(result[1], 16)
        const twoPart = parseInt(result[2], 16)
        const freePart = parseInt(result[3], 16)
        const itogResult = 'rgb('+ onePart+', '+twoPart+', '+freePart+')'
        return itogResult
    } else {
        const resultTwo = /^#{0,1}([a-f\d]{0,1})([a-f\d]{0,1})([a-f\d]{0,1})$/i.exec(color)
        const onePartTwoF = resultTwo[1]+resultTwo[1]
        const twoPartTwoF = resultTwo[2]+resultTwo[2]
        const freePartTwoF = resultTwo[3]+resultTwo[3]
        const onePartTwo = parseInt(onePartTwoF, 16)
        const twoPartTwo = parseInt(twoPartTwoF, 16)
        const freePartTwo = parseInt(freePartTwoF, 16)
        const itogResultTwo = 'rgb('+ onePartTwo+', '+twoPartTwo+', '+freePartTwo+')'
        return itogResultTwo
    };
};
module.exports = hexToRgb;
