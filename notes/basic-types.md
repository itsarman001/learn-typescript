# **TypeScript Data Types**

In TypeScript, data types are categorized into **Primitive** and **Reference** types.

---

## **Primitive Data Types**:

Primitive data types are simple, immutable, and passed by value. When you assign a primitive type to another variable, a new copy of the value is created.

### **1. String**:
A sequence of characters.
```typescript
let str: string = "Hello, TypeScript!";
```

### **2. Number**:
Represents both integer and floating-point numbers.
```typescript
let num: number = 42;
```

### **3. Boolean**:
Represents a logical value that can be either `true` or `false`.
```typescript
let isActive: boolean = true;
```

### **4. BigInt**:
A data type for working with large integers beyond the limits of the `Number` type.
```typescript
let bigNumber: BigInt = 9007199254740991n;
```

### **5. Symbol**:
A unique and immutable primitive used for object property keys.
```typescript
let symbolKey: symbol = Symbol('id');
```

### **6. Null**:
Represents the intentional absence of any object value. It’s a type of its own.
```typescript
let nothing: null = null;
```

### **7. Undefined**:
Represents an uninitialized variable.
```typescript
let notDefined: undefined;
```

---

## **Reference Data Types**:

Reference data types are more complex and store references to objects or arrays. When you assign a reference type to another variable, you are copying the reference (memory address) rather than the actual content. This means that changes made to the value through one reference will affect all references to that object.

### **1. Object**:
An object is a collection of key-value pairs, used to store collections of data.
```typescript
let person: { name: string; age: number } = { name: "Alice", age: 25 };
```

### **2. Array**:
An array is a list-like structure that can hold multiple values, potentially of different types.
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
```

### **3. Function**:
Functions are also reference types in JavaScript and TypeScript.
```typescript
function greet(): string {
  return 'Hello, World!';
}
```

### **4. Tuple**:
A tuple is a fixed-size array where elements can have different types.
```typescript
let personInfo: [string, number] = ["Alice", 25];
```

### **5. Enum**:
An enum is a special "class" that defines a set of constants. Enums are useful when you need to define a set of named values that can be used throughout your application.
```typescript
enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin"
}
let userRole: UserRoles = UserRoles.ADMIN;
```

### **6. Date**:
Represents a specific point in time.
```typescript
let today: Date = new Date('2025-04-06');
```

### **7. RegExp**:
Regular expression objects for pattern matching in strings.
```typescript
let pattern: RegExp = /abc/;
let testString = "abcdef";
console.log(pattern.test(testString)); // Output: true
```

---

## **Special Types in TypeScript**:

### **1. `any`**:
The `any` type allows a variable to hold any type of value. TypeScript will not perform type-checking for `any`, which reduces the advantages of TypeScript’s static typing.
```typescript
let value: any = "Hello";
value = 5;  // No error
value = true;  // No error
```

### **2. `unknown`**:
The `unknown` type is safer than `any`. You must perform type checking before using a variable of `unknown` type.
```typescript
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());  // Safe to access string methods
} else {
  console.log("Not a string");
}
```

### **3. `void`**:
The `void` type represents the absence of a return value in a function.
```typescript
function greet(): void {
  console.log("Hello, World!");
}
```

### **4. `null`**:
Represents the intentional absence of any object value.
```typescript
let nothing: null = null;
```

### **5. `undefined`**:
Represents an uninitialized variable.
```typescript
let notDefined: undefined;
```

### **6. `never`**:
The `never` type is used for functions that never return, such as those that throw exceptions or go into infinite loops.
```typescript
function throwError(): never {
  throw new Error("Something went wrong!");
}
```

---

## **Type Narrowing**:

Type narrowing allows you to refine a variable's type within a specific block of code based on conditions.

### **1. Narrowing with `typeof`**:
Use `typeof` to narrow down a variable’s type to more specific types such as `string`, `number`, `boolean`, etc.
```typescript
function checkType(value: unknown): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // safe to access string methods
  } else {
    console.log("Not a string");
  }
}
```

### **2. Narrowing with `instanceof`**:
Use `instanceof` to check if an object is an instance of a specific class or type.
```typescript
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  }
}
```

### **3. Narrowing with `any` and `unknown`**:
For `any`, you can directly use the variable, while for `unknown`, you must first check the type before performing operations.
```typescript
function handleInput(value: unknown): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());  // safe to access string methods
  } else {
    console.log("Input is not a string");
  }
}
```

---

## **Key Differences Between Primitive and Reference Types**:

### **1. Copying Behavior**:
- **Primitive types** are copied by value. Each variable holds its own copy of the value.
- **Reference types** are copied by reference. Variables refer to the same object in memory.

### **2. Immutability**:
- **Primitive types** are immutable. Once a primitive value is created, it cannot be changed (e.g., strings cannot be modified directly).
- **Reference types** are mutable. The properties of an object or elements of an array can be changed.

---

### **Example of Primitive Type (String)**:
```typescript
let a: string = "hello";
let b: string = a; // Copying the value
b = "world"; // Changing b doesn't affect a
console.log(a); // Output: "hello"
console.log(b); // Output: "world"
```

In the example above, `a` and `b` are two separate copies of the string. Modifying `b` doesn't affect `a`.

### **Example of Reference Type (Array)**:
```typescript
let a: number[] = [1, 2, 3];
let b: number[] = a; // Both a and b point to the same array
b.push(4); // Modifying b will also modify a
console.log(a); // Output: [1, 2, 3, 4]
console.log(b); // Output: [1, 2, 3, 4]
```

In the example above, `a` and `b` reference the same array. Changing the array through `b` also changes the array referenced by `a`.
