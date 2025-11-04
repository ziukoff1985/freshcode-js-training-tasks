'use strict';

function countSmiles(arr) {
    const regex = /[:;][-~]?[)D]/g;
    let smiles = 0;

    arr.forEach((element) => {
        if (element.match(regex)) smiles++;

        // * If array element can contain more than one smile
        // const match = element.match(regex);
        // smiles += match ? match.length : 0;
    });
    return smiles;
}

const correctFaces = [':)', ';)', ':-)', ';-)', ':D', ';D', ':~)', ';~)'];
const incorrectFaces = [':(', ';(', ':-]', ';-(', ':[', ';(', ':~(', ';~['];

console.log(countSmiles(correctFaces)); // 8
console.log(countSmiles(incorrectFaces)); // 0
