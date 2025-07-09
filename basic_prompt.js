function toCamelCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word, idx) => {
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("foo Bar")); // Output: fooBar