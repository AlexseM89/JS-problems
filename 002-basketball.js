/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */

function getWinner(points) {
    let oneTeam = [];
    let twoTeam = [];
    points.map((x) => {
        oneTeam.push(x.slice(0, 2));
        twoTeam.push(x.slice(3, 5));
    });
    let oneTeamCount = 0;
    oneTeam.forEach((y) => {
       oneTeamCount += Number(y);
    });
    let twoTeamCount = 0;
    twoTeam.forEach((y) => {
        twoTeamCount += Number(y);
    });
    if (oneTeamCount === twoTeamCount) {
        return undefined;
    };
    return oneTeamCount > twoTeamCount ? 1 : 2;
};
module.exports = getWinner;
