/*
create a server class that implements a rate limiter that allows up to 10 requests per second
*/

// Make sure you install dependencies with npm install before executing this script
import { DateTime } from 'luxon'

class Server {
    constructor(){
        this.numberOfRequestsThisSecond = 0
        this.timeOfRequest = DateTime.now()
    }

    makeRequest = () => {
        const now = DateTime.now()
        if(now < this.timeOfRequest.plus({seconds: 1})){
            if(this.numberOfRequestsThisSecond>10){
                return 'RATE LIMIT EXCEDED'
            }
            this.numberOfRequestsThisSecond += 1
            return 'SF'                
        }
        else{
            return 'SF'
        }
    }
}

const myServer = new Server()

const callMethod = () => {
    const response = myServer.makeRequest()
    return response
}

async function runLoop(){
    for(let i=1;i<=30;i++){
        const StringDateTime = new Date().toString()
        console.log(`${StringDateTime} - ${callMethod()}`)
        await new Promise(resolve => setTimeout(resolve, 20))
    }
}
runLoop()

// simple but incorrect implmentation that only checks for the seconds value of DateTime.
class Server2 {
    constructor(){
        this.numberOfRequestsThisSecond = 0
        this.firstSeenRequest = -1
    }

    makeRequest = () => {
        const dateTime = new Date()
        const currentSecond = dateTime.getSeconds()
        if(this.firstSeenRequest == -1){
            this.firstSeenRequest = currentSecond
        }


        if(currentSecond == this.firstSeenRequest){
            this.numberOfRequestsThisSecond += 1

            if(this.numberOfRequestsThisSecond <= 10){
                return 'NYC'
            }
            else{
                return 'RATE LIMIT EXCEDED'
            }
        }
        else{
            this.numberOfRequestsThisSecond = 1
            this.firstSeenRequest = currentSecond
            return 'NYC'
        }
    }

}

const myServer2 = new Server2()

const callMethod2 = () => {
    const response = myServer2.makeRequest()
    return response
}

async function runLoop2(){
    for(let i=1;i<=30;i++){
        const StringDateTime = new Date().toString()
        console.log(`${StringDateTime} - ${callMethod2()}`)
        await new Promise(resolve => setTimeout(resolve, 20))
    }
}

//runLoop2()




  


