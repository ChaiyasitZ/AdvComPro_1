/**
 * @param {string} str
 * @return {string}
 */

const str1 = 'Hello World';
const str2 = 'He is Gay';
const str3 = 'I Love You';

/**
 * @param {string} str 
 * @returns 
 */
const camelCase = (str) => {
    let arr = str.split(' ');
    let result = arr[0].toLowerCase();
    for (let i = 1; i < arr.length; i++) {
        result += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return result;
    }

/**
 * @param {string} str 
 * @returns 
 */
const snakeCase = (str) => {
    let arr = str.split(' ');
    let result = arr[0].toLowerCase();
    for (let i = 1; i < arr.length; i++) {
        result += '_' + arr[i].toLowerCase();
    }
    return result;
}

/** 
 * @param {string} str
 * @returns {string}
*/
const kebabCase = (str) => {
    let arr = str.split(' ');
    let result = arr[0].toLowerCase();
    for (let i = 1; i < arr.length; i++) {
        result += '-' + arr[i].toLowerCase();
    }
    return result;
}

console.log(str1 + ' => ' + camelCase(str1), snakeCase(str1), kebabCase(str1));
console.log(str2 + ' => ' + camelCase(str2), snakeCase(str2), kebabCase(str2));
console.log(str3 + ' => ' + camelCase(str3), snakeCase(str3), kebabCase(str3));



