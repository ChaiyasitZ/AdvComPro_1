function secretWord(word, key) {
  const alphabetDict = {}
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  alphabet.map((char, index) => {
      alphabetDict[char] = index + 1;
  })

  const center = Math.floor(word.length / 2) - 1;
  const centerTriplet = alphabetDict[word[center]] + alphabetDict[word[center - 1]] + alphabetDict[word[center + 1]];
  const firstTriplet = alphabetDict[word[key - 1]] + alphabetDict[word[key - 2]] + alphabetDict[word[key - 3]];
  const difference = (centerTriplet - firstTriplet) / (Math.round(key / 2) - 1);
  const charTriplet = []
  for (let i = 1; i <= key; i++) {
      charTriplet.push(getDigit(firstTriplet, difference, i));
  }

  let charCodeAt = [];
  charCodeAt[0] = key - 2;
  charCodeAt[Math.round(key / 2) - 1] = center;

  charTriplet.map((char, index) => {
      if (index === 0) return;
      if (index === (Math.round(key / 2) - 1)) return;

      let wordSplit = word.split("");
      for (let i = 0; i < wordSplit.length; i++) {
          let sum = 0;

          for (let j = 0; j < 3; j++) {
              sum += alphabetDict[wordSplit[i + j]];
          }

          if (sum === char) {
              charCodeAt[index] = i + 1;
              break;
          }
      }
  })
  return charCodeAt.map(char => word[char]).join("");
}
function getDigit(s, d, n) {
  return s + ((n - 1) * d);
}

console.log(secretWord("sadbpstcrdvaefikkgoenqrt", 5)) // "brake"
console.log(secretWord("aheiayd", 3)) // "hey"