'use strict';

const correctFaces = [
    ':)',
    ';)',
    ':-)',
    ';-)',
    ':D',
    ';D',
    ':-D',
    ';-D',
    ':~D',
    ';~D',
    ';~)',
    ':~)',
];

function countSmiles(arr) {
    return arr.filter((smile) => correctFaces.includes(smile)).length;
}

const smiles1 = [':(', ';(', ':-]', ';(', ':~(', ';~['];
const smiles2 = [':)', ';)', ':-)', ';-)', ':D', ';D'];

console.log(countSmiles(smiles1)); // 0
console.log(countSmiles(smiles2)); // 6
