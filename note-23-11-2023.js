const message: string = "Hello, TypeScript!";
console.log(message);


// keyword function - creates a function
// next comes name and than (name_of_variable: type_of_variable):
// next what is returning
function sayHello(name: string): string {
    return ("Siemankoo" + name);
}

// when it comes to variables you need to type the type after
const personName: string = "John";
console.log(sayHello(personName));

// next example
function addNumbers(first_number: number, second_number: number): number {
    return first_number + second_number;
}

const result: number = addNumbers(10, 21);
console.log(result)


// Implenetacion of struct
interface Person {
    name: string;
    age: number;
}
function greet(person: Person): string {
    return ("hello " + person.name + " you are " + person.age);
}

const user: Person = {name: "Janusz", age: 22};
console.log(greet(user))


// about clases and the inheritance
class Animal {
    constructor(public name: string){}
    makeSound(): string {
        return "temp sound";
    }
}

class Dog extends Animal {
    makeSound(): string {
        return "Wof Wof";
    }
}

const myDog = new Dog("Buddy");
console.log(myDog.name)
console.log(myDog.makeSound());

//enums
enum Color {
    RED = 10,
    GREEN = 20,
    BLUE = 30
}

let myColor: Color = Color.BLUE;
console.log(myColor)