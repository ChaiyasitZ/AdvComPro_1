// const book = {
//     isAvailable: false, // property
//     checkIn: function () { // method
//         this.isAvailable = true; // this refers to the object
//         return this; // return the object
//     }
// };

// console.log(book.checkIn()); // { isAvailable: true, checkIn: [Function: checkIn] }

var name = "Fatema";

function fun(){
    console.log(this.name); // Fatema
}

const user = {
    name: "Marium",
    yearOfBirth: 1899,
    calcAge: function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    }}

fun(); // Fatema
user.calcAge(); // 122
fun.call(user); // Anirach