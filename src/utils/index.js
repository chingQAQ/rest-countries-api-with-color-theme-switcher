export const upperCaseChar = (char) => char.toUpperCase();

export const capitalStr = (string, convert) => string.replace(/^\w/, convert);

export const Format = {
    number: (value) => new Intl.NumberFormat().format(value)
};
