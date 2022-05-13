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
// function has(path, object) {
//     return undefined;
// }

// module.exports = has;
function has(path, object) {
// let path = ['n']
// let ob = {a: 1}
// let ob1 = { o: { a: 2 } }
// let ob2 = {
//     a: 1,
//     o: {
//         a: 2
//     },
//     n: null,
//     'a.b.c': undefined
// }
// let ob4 = {}
// let ob5 = null
// let ob6 = undefined
if(object!=null && object!=undefined){
let obb = Object.keys(object)
// console.log(obb)
//ищем пересечения значений массива obb с массивом path
let peresechenie = obb.filter(x => path.includes(x))
// console.log(peresechenie)
if (peresechenie.length===0||peresechenie.length!=path.length){
    console.log(false)
    return false;
}else{
    console.log(true)
    return true;
}
}
else{
    console.log(false)
    return false;
}}

has(['a'], {a: 1, o: {a: 2}, n: null,'a.b.c': undefined})
has(['b'], {a: 1, o: {a: 2}, n: null,'a.b.c': undefined})
has(['o', 'a'], {a: 1, o: {a: 2}, n: null,'a.b.c': undefined})
has(['o', 'b'], {a: 1, o: {a: 2}, n: null,'a.b.c': undefined})
has(['a.b.c'], {a: 1, o: {a: 2}, n: null,'a.b.c': undefined})
has(['n'], {a: 1, o: {a: 2}, n: null,'a.b.c': undefined})
has(['b', 'a'], {a: 1, o: {a: 2}, n: null,'a.b.c': undefined})
has(['b', 'n'], {a: 1, o: {a: 2}, n: null,'a.b.c': undefined})
has(['n'], {})
has(['n'], null)
has(['n'], undefined)


// console.log(Object.keys(ob1))
// console.log(Object.keys(ob2))
// console.log(Object.keys(ob4))
// console.log(Object.keys(ob5))
// console.log(Object.keys(ob6))

module.exports = has;