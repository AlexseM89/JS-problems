/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
function has(path, object) {
    if (object != null && object != undefined) {
        const obb = Object.keys(object);
        const peresechenie = obb.filter(x => path.includes(x))
        if (peresechenie.length===0||peresechenie.length!=path.length){
            return false;
        } else {
            return true;
        };
    } else {
    return false;
    };
};
module.exports = has;