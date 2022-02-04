export const upperCaseChar = (char) => char.toUpperCase();

export const capitalStr = (string, convert) => string.replace(/^\w/, convert);

export const join = sign => value => value.join(`${sign}`);

const format = join(', ');

export const Format = {
    number: (value) => new Intl.NumberFormat().format(value),
    array: (value) => Array.isArray(value) && format(value),
    object: (value, concatKeyName) => {
        let heap = [];

        if (typeof value === 'object' && value !== null) {
            for (let [, {[concatKeyName]: v }] of Object.entries(value)) {
                heap.push(v != undefined && v);
            }
        }

        return format(heap);
    }
};
