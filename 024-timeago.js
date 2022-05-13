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
// function timeago(seconds) {
//     return undefined;
// }

// module.exports = timeago;


function timeago(seconds) {
    let min = Math.floor(seconds/60)
    let h = Math.floor(min/60)
    let d = Math.floor(h/24)
    let w = Math.floor(d/7)
    // console.log(h)
    let res 
if (seconds===0 || seconds < 10){
    console.log('just now')

    return res = 'just now'
    } else if(seconds===10||seconds<20){
    console.log('10 seconds ago')
    return res = '10 seconds ago'
    }else if(seconds===20||seconds<30){
        console.log('20 seconds ago')
        return res = '20 seconds ago'
    }else if(seconds===30||seconds<40){
            console.log('30 seconds ago')
            return res = '30 seconds ago'
                }else if(seconds===40||seconds<50){
                console.log('40 seconds ago')
                return res = '40 seconds ago'
                    }else if(seconds===50||seconds<60){
                    console.log('50 seconds ago')
                    return res ='50 seconds ago'
                        }else if(min===1){
                        console.log('1 minute ago')
                        return res ='1 minute ago'
                    }else if(seconds ===120 || seconds<180){
                        console.log('2 minutes ago')
                        return res = '2 minutes ago'
                            }else if(min===2||min<31){
                            console.log(min+' minutes ago')
                            return res = min + ' minutes ago'
                        }else if(min===31||min<60){
                            console.log(min+' minutes ago')
                            return res ='30 minutes ago'
                                }else if(h===1){
                                console.log('1 hour ago')
                                return res ='1 hour ago'
                                    }else if(h===2||h<12){
                                    console.log(h+' hours ago')
                                    return res =h+' hours ago'
                                }else if(h===12||h<24){
                                    console.log(h+' hours ago')
                                    return res ='12 hours ago'
                                        }else if(d===1){
                                        console.log('1 day ago')
                                        return res ='1 day ago'
                                            }else if(d===2||d<7){
                                            console.log('a few days ago')
                                            return res ='a few days ago'
                                                }else if(w===1){
                                                console.log('1 week ago')
                                                return res ='1 week ago'
                                                    }else if(w===2||w<4){
                                                    console.log(w+' weeks ago')
                                                    return res = w+' weeks ago'
                                                        }else if(w>=4){
                                                        console.log('undefined')
                                                        return res ='undefined'
                                                            }else{
                                                            console.log('undefined')
                                                            return res ='undefined'
    }
}

// }else if(){
//     console.log('')
// }
// timeago(0)
// timeago(9)
// timeago(120)
// timeago(604800)
// timeago(2419200)
// timeago(172800)
// timeago(172799)
// timeago(86399)
// timeago(2419199)
// timeago(2419200)

module.exports = timeago;