// Object clonnig
// Obj Ref, Obg Clonning assign(), {...}, JSON

const obj1 = {
    person : 'Anirach',
    weight : 100
}

const obj2 = {... obj1};
obj2.weight = 200;
console.log(obj1);
console.log(obj2);