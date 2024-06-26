// arrayManipulation.js

// Function to process an array of numbers
function processArray(numbers) {
    return numbers.map(num => (num % 2 === 0 ? num * num : num * 3));
}

// Function to format an array of strings based on corresponding processed numbers
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]

const strings = ["Hello", "World", "JavaScript", "is", "fun"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); // Output: ["hello", "WORLD", "javascript", "IS", "fun"]
