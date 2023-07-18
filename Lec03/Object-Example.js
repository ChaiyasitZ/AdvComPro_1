const cat = {
    name: 'Pipey',
    age: 8,
    whatName() {
        return this.name;
    },
};

console.log(cat.whatName());
console.log(cat.age);
cat.name = 'Whiskers';
console.log(cat.whatName());