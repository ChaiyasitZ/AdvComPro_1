class Dog { // class
    constructor(name) { // constructor
        this.name = name; // instance variable
    }

    introduce() { // instance method
        console.log("This is " + this.name + "!"); // instance method
    }

    static bark() { // static method
        console.log("Woof!"); // static method
    }
}

const myDog = new Dog("Buster"); // create an object
myDog.introduce(); // instance method is called with an object
Dog.bark(); // static method is called without creating an object
