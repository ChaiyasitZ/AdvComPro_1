const animalNames = ["dog", "cat", "bat", "cock", "cow", "pig", 
                    "fox", "ant", "bird", "lion", "wolf", "deer", 
                    "bear", "frog", "hen", "mole", "duck", "goat"];

function canFormAnimalName(name, charCounts) {
    const tempCounts = { ...charCounts };

    for (const char of name) {
        if (!tempCounts[char]) {
            return false;
        }
        tempCounts[char]--;
    }

    return true;
}

function getAnimalNames(chars, index, charCounts) {
    if (index >= chars.length) {
        return [];
    }

    let maxCountNames = getAnimalNames(chars, index + 1, { ...charCounts });

    for (let i = 0; i < animalNames.length; i++) {
        if (canFormAnimalName(animalNames[i], charCounts)) {
            const newCharCounts = { ...charCounts };
            for (const char of animalNames[i]) {
                newCharCounts[char]--;
            }
            const animalNamesFromHere = [animalNames[i], 
            ...getAnimalNames(chars, index + animalNames[i].length, newCharCounts)];
            if (animalNamesFromHere.length > maxCountNames.length) {
                maxCountNames = animalNamesFromHere;
            }
        }
    }
    return maxCountNames;
}

function count_animals(chars) {
    const charCounts = {};
    for (const char of chars) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    const animalNamesFound = getAnimalNames(chars, 0, charCounts);
    return (animalNamesFound.length);
}

console.log(count_animals("goatcode")); // 2 = dog, cat
console.log(count_animals("cockdogwdufrbir")); // 4 = cow, duck, frog, bird
console.log(count_animals("dogdogdogdogdog")); // 5 = dog, dog, dog, dog, dog


