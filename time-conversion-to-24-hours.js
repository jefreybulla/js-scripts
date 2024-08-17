/*

Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

*/


function timeConversion(s){

    //console.log(`sCopy: ${sCopy}`)
    // from 01:00:00AM to 11:59:59AM -> remove AM/PM
    // from 12:00:00PM to 12:59:59PM -> remove AM/PM

    // from 01:00:00PM to 11:59:59PM -> add 12 to the HH and remove AM/PM
    // from 12:00:00AM to 12:59:59AM -> change HH to 00 

    //sCopy = structuredClone(s)    another way to clone / deep copy
    const sCopy = s.slice()

    
    const n = s.length
    const hours = parseInt(s.slice(0,2))
    const dayNight = s.slice(8,10)

    //console.log(`h: ${hours} m: ${minutes} s: ${seconds} dayNight: ${dayNight}`)

    if(hours >= 1 && hours <= 11 && dayNight == 'AM' ){
        return s.slice(0,n-2)
    }
    if(hours == 12 && dayNight == 'PM' ){
        return s.slice(0,n-2)
    }
    if(hours >= 1 && hours <= 11 && dayNight == 'PM'){
        const newHour = hours + 12
        const sModified = sCopy.slice(2,n-2)  // remove hour and AM/PM
        //console.log(`sModified: ${sModified}`)
        return newHour + sModified
    }
    if(hours == 12 && dayNight == 'AM'){
        const newHour = '00'
        const sModified = sCopy.slice(2,n-2) // remove hour and AM/PM
        return newHour + sModified
    }
}



//const input = '07:05:45PM'  // 19:05:45
//const input = '01:05:45AM'  // 01:05:45
//const input = '12:05:45PM'  // 12:05:45
const input = '12:05:45AM'  // 00:05:45


const result = timeConversion(input)
console.log(result)