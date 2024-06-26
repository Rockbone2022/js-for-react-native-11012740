// userInfo.js

// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage
const originalNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
const modifiedNames = formatArrayStrings(originalNames, processArray([1, 2, 3, 4, 5]));
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
/*
Output:
[
    { id: 1, originalName: 'Alice', modifiedName: 'alice' },
    { id: 2, originalName: 'Bob', modifiedName: 'BOB' },
    { id: 3, originalName: 'Charlie', modifiedName: 'charlie' },
    { id: 4, originalName: 'David', modifiedName: 'DAVID' },
    { id: 5, originalName: 'Eve', modifiedName: 'eve' }
]
*/
