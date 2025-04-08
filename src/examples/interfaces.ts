// Interfaces Example

// Practice Questions

// Type Inference and Annotations
// 1. What will be the inferred type of the following variable?
let score = "100"; // String

// 2. Write a function that accepts two numbers and returns their sum with explicit type annotations.

function sumOfNumbers(a: number, b: number): number {
    return a + b;
}
console.log(sumOfNumbers(20, 40)); // 60

// Interfaces
// 3. Define an interface for a `Book` object with properties `title`, `author`, and an optional `yearPublished`.
interface Book {
    title: string; // We can use , or ; to separate properties
    author: string,
    yearPublished?: number;
}

// 4. Create an object adhering to the above `Book` interface.
const myBook: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925 // Optional property
}

// Extending Interfaces
// 5. Create an interface `Vehicle` with properties `make` and `model`. Extend it to create a `Car` interface with an additional property `year`.
interface Vehicle {
    make: string,
    model: string,
}

interface Car extends Vehicle {
    year: number,
}

// Type Aliases
// 6. Define a type alias for a union of `string | number`. Create a variable using this alias.
type StringOrNumber = string | number;
let myVariable: StringOrNumber;

// 7. Write a function that accepts an argument of this alias type and logs its value.
function logValue(value: StringOrNumber): void {
    console.log(value)
}

// Intersection Types
// 8. Combine two interfaces (`User` and `Admin`) into one using intersection types and create an object adhering to it.
interface User {
    name: string;
    email: string;
}

interface Admin {
    role: string;
    permissions: string[];
}

type AdminUser= User & Admin;

const adminUser: AdminUser = {
    name: "John Doe",
    email: "john@example.com",
    role: "Super Admin",
    permissions: ["read", "write", "delete"]
}

// 9. Explain the difference between intersection types and extending interfaces
/*
Intersection Types ( & ) combine multiple types into one, meaning the resulting type must include all properties and methods from the combined types. It’s flexible and can be used with any types (including objects and functions).

Extending Interfaces ( extends ) allows an interface to inherit properties from one or more other interfaces. This creates a new interface that can add more properties or override inherited ones, and it’s typically used for object-oriented patterns.

In short, intersection types are used to merge types, while extending interfaces is used to build upon existing interfaces, typically in an object-oriented manner.
*/