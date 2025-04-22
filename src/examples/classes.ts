// Classes & Objects
// 1. Class Definetion

class Device {
  name = "Poco x5 5g";
  ram = "6GB";
  storage = "128GB";
}
const d1 = new Device();
const d2 = new Device();
// 2. Constructors
// Construction is function that contains shape of the data not actual data.
// Note: when we call a class, constructor is being run first

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

/*
3. Access Modifiers (Public, Private, Protected)
4. Readonly properties
*/
class Example {
  // public   Accessible everywhere
  // private   Accessible only within this class
  // protected   Accessible within this class and subclasses
  // readonly   Can only be assigned during declaration or in the constructor

  constructor(
    public publicProperty: string,
    private privateProperty: string,
    protected protectedProperty: string,
    protected readonly readonlyProperty: string
  ) {
    this.publicProperty = publicProperty;
    this.privateProperty = privateProperty;
    this.protectedProperty = protectedProperty;
    this.readonlyProperty = readonlyProperty;
  }

  public showProperties() {
    console.log("Public:", this.publicProperty);
    console.log("Private:", this.privateProperty);
    console.log("Protected:", this.protectedProperty);
    console.log("Readonly:", this.readonlyProperty);
  }
}

class SubExample extends Example {
  constructor(
    publicProperty: string,
    privateProperty: string,
    protectedProperty: string,
    readonlyProperty: string
  ) {
    super(publicProperty, privateProperty, protectedProperty, readonlyProperty);
  }

  public showProtectedProperty() {
    console.log("Protected (from subclass):", this.protectedProperty);
  }
}

const example = new Example(
  "Public Value",
  "Private Value",
  "Protected Value",
  "Readonly Value"
);
example.showProperties();
console.log("Accessing public property:", example.publicProperty);
// example.privateProperty; // Error: Property 'privateProperty' is private
// example.protectedProperty; // Error: Property 'protectedProperty' is protected
// example.readonlyProperty = "New Value"; // Error: Cannot assign to 'readonlyProperty' because it is a read-only property

const subExample = new SubExample(
  "Public Value",
  "Private Value",
  "Protected Value",
  "Readonly Value"
);
subExample.showProtectedProperty();

/* Note: Typescript will only show you error that you are doing this thing wrong
but eventually it will be compiled to javascript and the error will be gone. */

// 5. Optional properties
// 6. Parameter properties
// 7. Getters and Setters
// 8. Abstract Classes and methods
