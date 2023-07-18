// const arrayOfNumbers = [1, 2, 3, 4];

// const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });
 
// console.log(sum); // 10

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index){
    const returns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, return: ${returns}`,
    );
    return returns;    
} 

array.reduce(reducer); // 66
  