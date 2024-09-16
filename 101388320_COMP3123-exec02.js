// Function 1
const greeter = (myArray, counter) => {
  let greetText = "Hello";
  for (let x of myArray) {
    console.log(`${greetText}  ${x}`);
  }
};
console.log(greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3));

// Function 2

const capitalize = (content) => {
  const [first, ...rest] = content;

  return `${first.toUpperCase()}${rest.join("")}`;
};

console.log(capitalize("foobar"));

//function 3

const colours = ["red", "green", "blue"];

let capitalizedColours = colours.map(capitalize);

console.log(capitalizedColours);

//function 4

const values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = (arr) => {
  let result = arr.filter((value) => {
    return value <= 20;
  });
  return result;
};

console.log(filterLessThan20(values));

//function 5

const array = [1, 2, 3, 4];

const calculateSum = (arr) => {
  const initial = 0;
  const sum = arr.reduce((accumaltor, current) => {
    return accumaltor + current;
  }, initial);
  return sum;
};

console.log(calculateSum(array));

const calculateProduct = (arr) => {
  const initial = 1;
  const sum = arr.reduce((accumulator, currentIndex) => {
    return accumulator * currentIndex;
  }, initial);
  return sum;
};
console.log(calculateProduct(array));

//Function 6
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  details() {
    console.log(`Year: ${this.year} Model ${this.model}`);
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  info() {
    console.log(
      `Year: ${this.year} Model: ${this.model} Balance: ${this.balance}`
    );
  }
}

const car2 = new Car("Pontaic Firebird", 1976);
console.log(car2.details());
const sedan = new Sedan("Volvo Sd", 2018, 30000);
console.log(sedan.info());
