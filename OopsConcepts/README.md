# OOPS Concepts

- Objects:
    
    Objects are the instance of the class. it contains Properties and Methods.

    if you consider "a car" as a real-life object. it has certain characterstics like color, model, horsepower etc and it can perform some actions like driving.
    here the characterstics of the car is called Properties and the Actions performed by an entity is called Methods.

    Objects can be created in two ways,
    - Object Literals:

    ```
    let person = {
        firstName: "John",
        lastName: "Doe",
        getFullName: () => `The name of the person is ${person.firstName} ${person.lastName}`
    };

    console.log(person.getFullName());

    ```
    - Object Constructor:

    ```
    // Traditonal way

    function person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    };

    const person1 = new person("John", "Doe");

    const person2 = new person("Nagarjun", "Shroff");

    console.log(`This first person name is ${person1.firstName} ${person1.lastName}`);
    console.log(`This second person name is ${person2.firstName} ${person2.lastName}`);

    ```
- Classes:

    Classes are the templates for creating objects. This encapsulate the data and the code which works on that data.

    JavaScript is a prototype-based object oriented lanaguage, which means it has no classes, rather it defines the behaviour using constructor function and then reuses it using the prototype.

    constructor is nothing but the special function that return an object. The special thing is when we invokedwith the "new" keyword, it assigns its prototype as the prototype of the returned object.

    ```
    class Vehicle {
        constructor(name, maker, engine){
            this.name = name;
            this.maker = maker;
            this.engine = engine;
        }

        getDetails(){
            return `The name of the bike is ${this.maker} ${this.name}.`
        }
    }

    const bike1 = new Vehicle("Hayabusa", "Suzuki", "1340CC");
    const bike2 = new Vehicle("Z900", "Kawasaki", "948CC");

    console.log(bike1.getDetails());
    console.log(bike2.getDetails());

    ```
- this keyword:

    this keyword will always refers to the class itself and it is used to define the properties of class inside the constructor function.


- 4 principles of OOP

    1. Inheritance:

        It is concept in which certains properties and methods of one object is being used by another object. Unlike other OOP languages classes inherits classes, JavaScript object inherit objects i.e. certain properties on one object is used by another object.

    ```
    class Person{
        constructor(name){
            this.name = name;
        };

        toString(){
            return `The person name is ${this.name}`;
        };
    }

    class Student extends Person{
        constructor(name, id){
            super(name);
            this.id = id;
        };

        toString(){
            return `${super.toString()}, Student ID: ${this.id}`;
        };
    }

    const student = new Student("Nagarjun", 123);

    console.log(student.toString());

    Output:
    The person name is Nagarjun, Student ID: 123

    ```

    2. Encapsulation:

        it is a process of wrapping the properties and the method in a single unit is called Encapsulation.

    ```
    class Person{
        constructor(name, id){
            this.name = name;
            this.id = id;
        };

        addAddress(address){
            this.address = address;
        };

        getDetails(){
            return `Name: ${this.name}, address: ${this.address}`;
        };
    }

    const person = new Person("Nagarjun", 123);
    person.addAddress("Bangalore");

    console.log(person.getDetails());

    Output:
    Name: Nagarjun, address: Bangalore

    ```

    3. Abstraction:

        Representing the essential features, hiding the implementation details.

        In other OOP languages, there are access modifiers to restrict the class variables, but in JavaScript there is nothing as such. Still there are ways to do this as below

    ```
    function Person(){
        let firstName = "Nagarjun";
        let lastName = "Shroff";

        let noAccess = function() {
            return "This method can not be accessed be anyone outside this function.";
        };

        this.access = function() {
            return "This method can be accessed by anyone outside of this function.";
        };
    }

    const person = new Person();
    console.log(person.firstName); //undefined
    console.log(person.noAccess); //undefined
    console.log(person.access()); // This method can be accessed by anyone outside of this function.

    ```
    4. Polymorphism:

        Same functions with different signatures is called many times.

    ```
    class Shape{

        area(){
            return 0;
        }

        perimeter(){
            return 0;
        }
    }

    class Circle extends Shape{
        constructor(radius){
            super();
            this.radius = radius;
        }

        area(){
            return Math.PI * this.radius ** 2;
        }

        perimeter() {
            return 2 * Math.PI * this.radius;
        }
    }

    class Rectangle extends Shape{
        constructor(width, height){
            super();
            this.width = width;
            this.height = height;
        }

        area(){
            return this.width * this.height;
        }

        perimeter(){
            return 2 * (this.width + this.height);
        }
    }

    const circle = new Circle(3);
    const rectangle = new Rectangle(2,3);

    console.log(`Area of the Circle: ${circle.area()}`);
    console.log(`Perimeter of the Circle: ${circle.perimeter()}`);
    console.log(`Area of the Rectangle: ${rectangle.area()}`);
    console.log(`Perimeter of the rectangle: ${rectangle.perimeter()}`);

    ```