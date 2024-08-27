/*
given a group of tables at a restaurant and its reservations, produce all available 2-hour slots 
and options every 30 minutes as avaialability allows


If restaurant accepts revervations between 12PM-5PM:
input: reservations = {table1: {2PM}}
output:  [12PM, 4PM, 4:30PM, 5:00PM]
*/

// Make sure you install dependencies with npm install before executing this script
import { DateTime, Duration } from 'luxon'

function calculateTableAvailability(param){
    let firstReservationTime = DateTime.fromISO(param.first_reservation_time)
    let lastReservationTime = DateTime.fromISO(param.last_reservation_time)
    let numberOfTables = param.table_reservations.length
    let availableTimes = new Map()

    for(let i=0;i<numberOfTables;i++){
        let reservations = []
        for(let item of param.table_reservations[i].reservations){
            //console.log(item)
            reservations.push(DateTime.fromISO(item))
        }

        let tempTime =  firstReservationTime
        let stepDuration = Duration.fromObject({ minutes: 30 })
        let revervationDuration = Duration.fromObject({ hours: 2 })
        let pointer = 0
        let mapKey
        while(tempTime <= lastReservationTime){
            //console.log(`checking window: ${tempTime}`)
            if(reservations[pointer] && tempTime.plus(revervationDuration) > reservations[pointer]){
                //console.log('window does not work')
                tempTime = reservations[pointer].plus(revervationDuration)
                pointer += 1
            }
            else{
                //console.log('this window is available!')
                mapKey = tempTime.hour.toString() + tempTime.minute.toString()
                availableTimes.set(mapKey, 1)
                tempTime = tempTime.plus(stepDuration)
            }
        }

    }

    return availableTimes
}
let input = {
    'first_reservation_time': '2024-08-24T16:00:00.000Z',
    'last_reservation_time': '2024-08-24T21:00:00.000Z',
    'table_reservations': [
        {   
            'table_id': '1',
            'capacity':'2',
            'reservations': ['2024-08-24T18:00:00.000Z']
        }
        ,
        {
            'table_id': '2',
            'capacity':'2',
            'reservations': ['2024-08-24T18:00:00.000Z']
        },
        {
            'table_id': '3',
            'capacity':'2',
            'reservations': ['2024-08-24T18:00:00.000Z']
        },
        {
            'table_id': '4',
            'capacity':'2',
            'reservations': ['2024-08-24T18:00:00.000Z']
        },
        {
            'table_id': '5',
            'capacity':'2',
            'reservations': ['2024-08-24T18:00:00.000Z']
        },
        {
            'table_id': '6',
            'capacity':'2',
            'reservations': ['2024-08-24T18:00:00.000Z']
        },
        {
            'table_id': '7',
            'capacity':'2',
            'reservations': ['2024-08-24T18:00:00.000Z']
        },
        {   
            'table_id': '8',
            'capacity':'2',
            'reservations': ['2024-08-24T18:00:00.000Z']
        }
    ],

}

let start = performance.now()
let result = calculateTableAvailability(input)
let finish = performance.now()
console.log(result)
console.log(`execution time: ${finish-start}`)
// time complexity is O(nxw) where n is the number of tables and w is the numner of reservation windows in a day


//To-do: check availability for specific seats required: e.g table for 4