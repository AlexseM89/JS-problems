/**
 * На экскурсионном маршруте автобусу высотой 512 см встречаются несколько мостов.
 *
 * Напишите функцию checkBusTour(bridges) вычисляющую номер моста под которым не сможет проехать автобус.
 *
 * Пример:
 *
 * checkBusTour([600, 512]) === 2
 * checkBusTour([600, 1024]) === undefined  # Автобус успешно проедет по маршруту
 *
 * @param {number[]} bridges высоты мостов встречающихся на маршруте
 * @returns {undefined|number}
 */
// function checkBusTour(bridges) {
//     return -1;
// }

//




function checkBusTour(bridges) {
        let a = (bridges.findIndex(currentValue => currentValue <= 512)) + 1; 
        if (a!=0)
        return a;
        else {
            console.log(undefined)
        } ;  
};

// checkBusTour([600, 512])
// checkBusTour([600, 1024])
// checkBusTour([600, 700, 100])
// checkBusTour([600, 800, 600, 100])

module.exports = checkBusTour;