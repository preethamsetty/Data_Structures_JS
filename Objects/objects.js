//Object Literal:
//---------------
const person1 = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

//----------------------------------------------------

const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    greet: function() {
      console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
  };
  
  // Accessing properties
  console.log(person.firstName); // Output: Alice
  console.log(person["lastName"]); // Output: Smith
  
  // Adding a property
  person.city = "New York";
  console.log(person.city); // Output: New York
  
  // Removing a property
  delete person.age;
  console.log(person.age); // Output: undefined
  
  // Calling a method
  person.greet(); // Output: Hello, my name is Alice Smith
  
  // Iterating over properties
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  
  // Using Object.keys()
  const keys = Object.keys(person);
  for (let key of keys) {
    console.log(key + ": " + person[key]);
  }