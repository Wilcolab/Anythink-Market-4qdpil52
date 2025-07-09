/**
 * Converts a given string to camelCase.
 *
 * The function trims the input string, splits it by whitespace, and converts the first word to lowercase.
 * Each subsequent word is capitalized (first letter uppercase, rest lowercase) and concatenated to form a camelCase string.
 *
 * @param {string} input - The input string to convert. Must be a non-null, non-undefined string.
 * @returns {string} The camelCase version of the input string. Returns an empty string if input contains no words.
 * @throws {Error} Throws an error if the input is not a non-null, non-undefined string.
 *
 * @example
 * toCamelCase('foo bar'); // returns 'fooBar'
 * toCamelCase('Hello world example'); // returns 'helloWorldExample'
 * toCamelCase('   multiple   spaces   '); // returns 'multipleSpaces'
 */
 

function toCamelCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Input must be a non-null, non-undefined string.');
    }

    // Trim and split by spaces, filter out empty strings
    const words = input.trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) return '';

    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('foo bar')); // "fooBar"
// console.log(toCamelCase('Hello world example')); // "helloWorldExample"
// toCamelCase(5, 3); // Throws error

/**
 * Converts a given string to dot.case.
 *
 * The function trims the input string, splits it by whitespace, lowercases all words, and joins them with dots.
 *
 * @param {string} input - The input string to convert. Must be a non-null, non-undefined string.
 * @returns {string} The dot.case version of the input string. Returns an empty string if input contains no words.
 * @throws {Error} Throws an error if the input is not a non-null, non-undefined string.
 *
 * @example
 * toDotCase('foo bar'); // returns 'foo.bar'
 * toDotCase('Hello world example'); // returns 'hello.world.example'
 * toDotCase('   multiple   spaces   '); // returns 'multiple.spaces'
 */

function toDotCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Input must be a non-null, non-undefined string.');
    }

    // Trim, split by spaces, filter out empty strings, join with dots, and lowercase
    return input
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(toDotCase('foo bar')); // "foo.bar"
// console.log(toDotCase('Hello world example')); // "hello.world.example"
// toDotCase(5, 3); // Throws error

