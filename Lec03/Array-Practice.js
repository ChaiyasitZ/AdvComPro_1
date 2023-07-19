let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, 'Mars'];
let values3 = ['Mars', 2, 'Apple'];

// compare array and show array
function compareArray(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            console.log(arr1[i] + ' and ' + arr2[i] + ' matched');
        } 
        if (arr1[i] !== arr2[i]) {
            console.log(arr1[i] + ' and ' + arr2[i] + ' not matched');
        }
    }}

compareArray(values3, values2);

  