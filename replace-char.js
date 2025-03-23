

// for single char edits use substring
function replaceChar(str, index, newChar) {
    return str.substring(0, index) + newChar + str.substring(index + 1);
}

const result = replaceChar("hello", 0, "H");
console.log(result); // "Hello"
// time complexity O(n) + O(n) ~ O(n)
// space complexity O(1)


// for high-performance use (e.g. many edits)

function mutateString(str, edits) {
    const arr = str.split(""); // Convert to char array

    for (const [index, char] of edits) {
        arr[index] = char; // Modify in place - O(1)
    }

    return arr.join(""); // Convert back to string
}

// Example usage
const result2 = mutateString("hello", [[0, "H"], [4, "!"]]);
console.log(result2); // "Hell!"
// time complexity: O(n) + O(n) ~ O(n)
// space complexity: O(n)