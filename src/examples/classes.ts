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

// 3. Access Modifiers (Public, Private, Protected)
// 4. Readonly properties
// 5. Optional properties
// 6. Parameter properties
// 7. Getters and Setters
// 8. Abstract Classes and methods
