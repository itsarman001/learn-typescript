// Basic Types
// Task 1: Basic Types
// 1. Create a variable of each of the basic types: string, number, and boolean. 
//    Assign values to them and log them to the console.
//
//    Bonus: Create an array of numbers and an array of strings.

let myString: string = "String";
let myNumber: number = 0;
let isBoolean: boolean = false;

let myArr: Array<string | number | boolean> = [myString, myNumber, isBoolean]
console.log("Task #1: ",myArr)

// Task 2: Arrays and Tuples
// 2. Write a function that takes a tuple `[string, number]` as an argument and returns a string 
//    formatted like `"Name is Alice, Age is 25"`.
const person: [string, number] = ["John Doe", 30]
function introducer(person: [string, number]): string {
    return `Hi, my name is ${person[0]} and i am ${person[1]}`
}

console.log("Task #2: ", introducer(person))

// 3. Create an array of objects representing people (e.g., `{ name: string, age: number }`). 
//    Iterate over the array and print the name and age of each person.
const people: {name: string, age: number}[] = [
    {name: "John Doe", age: 30}, 
    {name: "Alice", age: 40}, 
    {name: "Charlie", age: 56}, 
    {name: "Bob", age: 25}
  ];
  
  people.forEach((person, index) => 
    console.log(`Task #3: ${index + 1} - Hi, my name is ${person.name} and I am ${person.age} years old.`)
  );
  

// Task 3: Enums
// 4. Define an enum called `Status` with values `Active`, `Inactive`, and `Pending`. 
//    Then, create a variable of type `Status` and log it to the console.
enum Status {
    ACTIVE = 'active',
    INACTIVE = "inactive",
    PENDING = "pending"
}
const userStatus: Status = Status.INACTIVE
console.log(`Task #4: ${userStatus}`)

// 5. Write a function that takes a `Status` enum as an argument and returns a message based on the status 
//    (e.g., `"The user is active"`).
function returnStatus(status: Status): string {
    switch (status) {
        case Status.ACTIVE:
            return "user is active"
            
        case Status.INACTIVE:
            return "user is inactive"
            
        default:
            return "user status is pending"
    }
}

// Or
/* // AI Recommendation
function returnStatus1(status: Status): string {
    const statusMessages: Record<Status, string> = {
        [Status.ACTIVE]: "user is active",
        [Status.INACTIVE]: "user is inactive",
        // You can handle the default status directly here
    };

    return statusMessages[status] || "user status is pending";
} */

console.log("Task #5: ",returnStatus(Status.ACTIVE))

// Task 4: Any, Unknown, Void, Null, Undefined, Never
// 6. Create a function that accepts an argument of type `any` and logs the length of the argument 
//    (if it’s a string or array). Try calling it with both a string and an array.
function logLength(value: any): void {
    if (typeof value === "string" || Array.isArray(value)) {
        console.log(`Task #6: length of ${value} is ${value.length}`)
    } else {
        console.log('Value is not a string or array');
    }
}

logLength('Hello');
logLength([1, 2, 3]);

// 7. Write a function that accepts an `unknown` type. Use type narrowing to check if it's a string 
//    and return its length, or return a message saying it's not a string.
function checkUnknownType(value: unknown): void {
    typeof value === 'string'
        ? console.log(`Task #7: ${value.length}`)
        : console.log("Task #7: Not a string")
}

checkUnknownType("Hello, World!");
checkUnknownType(25);

// 8. Implement a function that returns `void` and simply logs a message like `"This function does not return anything"`.
function logMessage():void {
    console.log("Task #8: This Function does not return anything")
}

logMessage()

// 9. Create a variable of type `null` and `undefined`, and log both to the console.
let x: null = null
let y: undefined = undefined

console.log(`Task #9 ${x}`)
console.log(`Task #9 ${y}`)

// 10. Write a function that never returns (e.g., it throws an error or goes into an infinite loop). 
//     Use the `never` type for its return type.
function throwError(): never {
   throw new Error("Something went wrong")
}
// throwError()

// Task 5: Type Narrowing
// 11. Write a function that accepts a parameter of type `string | number`. 
//     Use type narrowing to check if the parameter is a string and then convert it to uppercase.

function convertToUpper(value: string | number): string {
    if (typeof value === "string") {
        return value.toLocaleUpperCase()
    }
    return String(value)
}

console.log("Task #11: ", convertToUpper("Hello, World!"))

// 12. Create a function that accepts a parameter of type `unknown`. 
//     Narrow it to a `Date` object using `instanceof` and then return the current day of the week.
function getDayOfWeek(value:  unknown): string {
    if(value instanceof Date) {
        const days = ["SUNDAY", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return days[value.getDay()]
    } return `Not a valid Date object`
}
console.log("Task #12: ", getDayOfWeek(new Date()))