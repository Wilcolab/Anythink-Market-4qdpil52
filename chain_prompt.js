function toKebabCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Input must be a non-null, non-undefined string');
    }

    const words = input.trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) {
        return '';
    }

    return words.map(word => word.toLowerCase()).join('-');
}