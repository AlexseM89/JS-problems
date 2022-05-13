/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
// function decrypt(secret) {
//     return undefined;
// }



function decrypt(secret) {
    let inCorretcString = secret.split('');
    let res = inCorretcString.map(char => String.fromCharCode(char.charCodeAt(0) + 1));
    let correcrString = res.join("");
    let str1 =  correcrString.replace(/{/g, 'a')
    let str2 = str1.replace(/!/g, ' ') 
return str2;
}


// function decrypt(secret) {
//     let inCorretcString = secret.split('');
//     let res = inCorretcString.map(char => {
//         let a = char
//        if (a=="z") {String.fromCharCode(a.charCodeAt(0) + 2);}
//     })
//     let correcrString = res.join("")
// console.log(correcrString);
// }

// function decrypt(secret) {
//     let inCorretcString = secret.split('');
//     let res = inCorretcString.map((char) => {
   
//         if (char.charCodeAt(0)===90) {
//             return String.fromCharCode(char.charCodeAt(0) - 25);         
//         }
//         else if (char.charCodeAt(0)===32) {
//             return String.fromCharCode(char.charCodeAt(0) - 0);
//         }
//         else {
//             return String.fromCharCode(char.charCodeAt(0) + 1);
//         }
//     }) 
//     let correcrString = res.join("")
//     return  console.log(res.join(""));
// }

// function decrypt(secret) {
//             for (let char of secret) {
//                 String.fromCharCode(char.charCodeAt(0) + 1)
//             }

//     let inCorretcString = secret.split('');
//     let res = inCorretcString.map(char => String.fromCharCode(char.charCodeAt(0) + 1));
//     let correcrString = res.join("")
// console.log(correcrString);
// }

// console.log(decrypt('bnqqdbs'))
// console.log(decrypt('zmc vd hfmnqd rozbdr'))

module.exports = decrypt;