# Type Inference, Interfaces, and Type Aliases

### **1. Type Inference**

- TypeScript automatically infers the type of a variable based on its initial value or usage.
- Example:

  ```typescript
  let age = 25; // TypeScript infers 'age' as number
  ```

- Type inference applies to:
  - Variables
  - Function return types
  - Default parameter values

---

### **2. Understanding Type Inference**

- **Implicit Inference**: When a type is deduced automatically without explicit annotation.

  ```typescript
  const message = "Hello"; // Inferred as string
  ```

- **Explicit Annotation**: Overriding inference by explicitly declaring a type.

  ```typescript
  const message: string = "Hello";
  ```

- Benefits:
  - Reduces verbosity in code.
  - Ensures type safety without requiring explicit annotations everywhere.

---

### **3. Type Annotations**

- Explicitly specifying the type of variables, function parameters, and return values.
- Syntax: `variableName: type`
- Example:

  ```typescript
  let username: string = "John";
  function add(a: number, b: number): number {
    return a + b;
  }
  ```

- Useful for:
  - Enhancing code clarity.
  - Catching errors during compilation.

---

### **4. Interfaces and Type Aliases**

- Both are used to define custom types, but they have different use cases.

---

### **5. Defining Interfaces**

- Interfaces define the structure of an object (a contract).
- Syntax:

  ```typescript
  interface User {
    id: number;
    name: string;
    email?: string; // Optional property
  }
  ```

- Example usage:

  ```typescript
  const user: User = { id: 1, name: "Alice" };
  ```

---

### **6. Using Interfaces to Define Object Shapes**

- Interfaces ensure that objects adhere to a specific structure.
- Example:

  ```typescript
  interface Car {
    make: string;
    model: string;
    year: number;
  }

  const myCar: Car = { make: "Toyota", model: "Corolla", year: 2020 };
  ```

---

### **7. Extending Interfaces**

- Interfaces can inherit properties from other interfaces using the `extends` keyword.
- Example:

  ```typescript
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
  }

  const myDog: Dog = { name: "Buddy", age: 3, breed: "Golden Retriever" };
  ```

---

### **8. Type Aliases**

- A way to create custom names for types (primitives, objects, unions, etc.).
- Syntax:

  ```typescript
  type ID = number | string;

  type User = {
    id: ID;
    name: string;
    email?: string;
  };

  const user: User = { id: "123", name: "John" };
  ```

- Differences from interfaces:
  - Can represent union and intersection types.
  - Cannot be reopened or extended like interfaces.

---

### **9. Intersection Types**

- Combine multiple types into one using the `&` operator.
- Example:

  ```typescript
  interface Person {
    name: string;
    age: number;
  }

  interface Employee {
    companyId: number;
    position: string;
  }

  type Worker = Person & Employee;

  const worker: Worker = {
    name: "John",
    age: 30,
    companyId: 101,
    position: "Developer",
  };
  ```

---

### Practice Questions

### **Type Inference and Annotations**

1. What will be the inferred type of the following variable?

   ```typescript
   let score = "100";
   ```

2. Write a function that accepts two numbers and returns their sum with explicit type annotations.

### **Interfaces**

3. Define an interface for a `Book` object with properties `title`, `author`, and an optional `yearPublished`

4. Create an object adhering to the above `Book` interface.

### **Extending Interfaces**

5. Create an interface `Vehicle` with properties `make` and`model`. Extend it to create a `Car` interface with an additional property `year`.

### **Type Aliases**

6. Define a type alias for a union of `string | number`. Create a variable using this alias.
7. Write a function that accepts an argument of this alias type and logs its value.

### **Intersection Types**

8. Combine two interfaces (`User` and `Admin`) into one using intersection types and create an object adhering to it.

9. Explain the difference between intersection types and extending interfaces.
