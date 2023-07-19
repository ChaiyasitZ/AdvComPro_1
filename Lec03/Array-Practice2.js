let furniture = ['Table', 'Couch', 'Chair']

for (let i = 0; i < furniture.length; i++) {
    const item = furniture[i];
    const characters = item[Symbol.iterator]();
    while (true) {
        let result = characters.next();
        if (result.done) break;
        console.log(result.value);
    }
}