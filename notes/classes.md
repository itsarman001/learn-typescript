# Classes & Objects

## Class defination

A class is defined using the class keyword, followed by the class name and its members

```typescript
class Device {
  name = "Poco X5 5G";
  ram = "6GB";
  storage = "128GB";
}
const d1 = new Device();
const d2 = new Device();
```

## Constructors

**_Construction_** is function that contains **_shape_** of the data not actual data.

**Note:** when we call a class, constructor is being run first

```typescript
class Bottle {
  /* Writing it directly in constructor should have a public prefix
  unless it will not be used.
  */
  constructor(
    public name: string,
    public capacity: number,
    public color: string,
    public price: number = 600 // Default value
  ) {}
}
const b1 = new Bottle("Milton V1", 1, "red", 1200);
class Bottle1 {
  public name;
  public capacity;
  public color;
  public price;

  constructor(
    name: string,
    capacity: number,
    color: string,
    price: number = 600
  ) {
    this.name = name;
    this.capacity = capacity;
    this.color = color;
    this.price = price;
  }
}

const b2 = new Bottle1("Milton V1", 1, "red", 1200);
console.log(b1, b2);
```

## Access Modifiers (Public, Private, Protected)

- **Public**: Accessible everywhere.
- **Private**: Accessible only within the class.
- **Protected**: Accessible within the class and its subclasses.

In TypeScript, access modifiers define the visibility of class members (properties and methods) to other classes. The three primary access modifiers in TypeScript are:

### 1. **Public**

- The default access modifier for class members.

- Public members are accessible anywhere, both inside and outside the class.

#### Example

```typescript
class Car {
  public model: string;

  constructor(model: string) {
    this.model = model;
  }

  public displayModel(): void {
    console.log(`Model: ${this.model}`);
  }
}

const myCar = new Car("Tesla");
myCar.displayModel();  // Accessible outside the class
```

### 2. **Private**

- Private members are only accessible within the class where they are defined.
- They are not accessible from outside the class or from derived classes.

#### Example

```typescript
class Car {
  private model: string;

  constructor(model: string) {
    this.model = model;
  }

  private displayModel(): void {
    console.log(`Model: ${this.model}`);
  }

  public showCarDetails(): void {
    this.displayModel();  // Accessing private method inside the class
  }
}

const myCar = new Car("Tesla");
myCar.showCarDetails();  // Accessible via public method
// myCar.displayModel();  // Error: Property 'displayModel' is private and only accessible within class 'Car'
```

### 3. **Protected**

- Protected members are accessible within the class and its subclasses (derived classes).
- Not accessible from outside the class unless through a subclass.

#### Example

```typescript
class Vehicle {
  protected model: string;

  constructor(model: string) {
    this.model = model;
  }
}

class Car extends Vehicle {
  public showCarDetails(): void {
    console.log(`Model: ${this.model}`);  // Accessing protected member from the parent class
  }
}

const myCar = new Car("Tesla");
myCar.showCarDetails();  // Accessible in the subclass
// console.log(myCar.model);  // Error: Property 'model' is protected and only accessible within class 'Vehicle' and its subclasses
```

## Readonly properties

## Optional properties

## Parameter properties

## Getters and Setters

## Abstract Classes and methods
