/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    let min = Math.floor(seconds / 60);
    let h = Math.floor(min / 60);
    let d = Math.floor(h / 24);
    let w = Math.floor(d /7 );
    let res;
    if (seconds === 0 || seconds < 10) {
        return res = 'just now';
    } else if (seconds === 10 || seconds < 20) {
        return res = '10 seconds ago';
    } else if (seconds === 20 || seconds < 30) {
        return res = '20 seconds ago';
    } else if (seconds === 30 || seconds < 40) {
        return res = '30 seconds ago';
    } else if (seconds === 40 || seconds < 50) {
        return res = '40 seconds ago';
    } else if (seconds === 50 || seconds < 60) {
        return res = '50 seconds ago';
    } else if (min === 1) {
        return res ='1 minute ago';
    } else if (seconds === 120 || seconds < 180) {
        return res = '2 minutes ago';
    } else if (min === 2 || min < 31) {
        return res = min + ' minutes ago';
    } else if (min === 31 || min < 60) {
        return res = '30 minutes ago';
    } else if (h === 1) {
        return res = '1 hour ago';
    } else if (h === 2 || h < 12) {
        return res = h + ' hours ago';
    } else if (h === 12 || h < 24) {
        return res = '12 hours ago';
    } else if (d === 1) {
        return res = '1 day ago';
    } else if (d === 2 || d < 7) {
        return res = 'a few days ago';
    } else if (w === 1) {
        return res = '1 week ago';
    } else if (w === 2 || w < 4) {
        return res = w + ' weeks ago';
    } else if (w >= 4) {
        return res = 'undefined';
    } else {
        return res = 'undefined';
    };
};
module.exports = timeago;