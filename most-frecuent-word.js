/*
You’re given a string containing a sentence. Write a function to find the most frequently occurring word in the sentence. If multiple words have the same highest frequency, return any one of them. Ignore punctuation and consider words case-insensitively.
*/

function mostFrequentWord(sentence) {
    const splitSentence = sentence.split(' ')
    let memory = {}
    let mostRecurrences = 0 
    let response = ''
    for(let word of splitSentence){
        const wLowerCase = word.toLowerCase()
        if (memory[wLowerCase]){
            memory[wLowerCase] += 1
        }
        else{
            memory[wLowerCase] = 1
        }
        if (memory[wLowerCase] > mostRecurrences){
            response = wLowerCase
            mostRecurrences = memory[wLowerCase]
        }
    }
    console.log(memory)

    return response
}


const sentence = "Graable is great, and Graable is innovative!";
console.log(mostFrequentWord(sentence)); // "graable"
