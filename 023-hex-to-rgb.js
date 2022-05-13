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
    let lengthString = color.length
    if (lengthString===7){
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
        // console.log(result)
         let onePart = parseInt(result[1], 16)
        //  let onePartStr = onePart.toString() 
        //  console.log(onePart)
         let twoPart = parseInt(result[2], 16)
         let freePart = parseInt(result[3], 16)
         let itogResult = 'rgb('+ onePart+', '+twoPart+', '+freePart+')'
        // let itogResult = 'rgb(${onePart} , ${twoPart}, ${freePart})'
        console.log(itogResult)
    } else {
        let resultTwo = /^#{0,1}([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(color)
        // console.log(resultTwo[1]+resultTwo[1])
        let onePartTwoF = resultTwo[1]+resultTwo[1]
        let twoPartTwoF = resultTwo[2]+resultTwo[2]
        let freePartTwoF = resultTwo[2]+resultTwo[2]
        let onePartTwo = parseInt(onePartTwoF, 16)
        let twoPartTwo = parseInt(twoPartTwoF, 16)
        let freePartTwo = parseInt(freePartTwoF, 16)
        let itogResultTwo = 'rgb('+ onePartTwo+', '+twoPartTwo+', '+freePartTwo+')'
        console.log(itogResultTwo)
    }
}



hexToRgb('#000000')
hexToRgb('#fff')
hexToRgb('#800080')
