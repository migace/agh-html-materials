let age = 12;
let name;

name = "Mike";

const PI = 3.14;

// console.log("test" + " " + PI);
console.log(`Test: ${PI}`);

function hello(a = "World") {
  console.log(`Hello ${a}`);
}

hello();
hello(name);
hello("");

if (age >= 18 && age < 100) {
  console.log("Adult");
} else if (age >= 12) {
  console.log("Teenager");
} else {
  console.log("Child");
}

function isMature(age) {
  return age >= 18;
}

console.log(isMature(20));

const isMikeAdult = isMature(age);

console.log(isMikeAdult);

function getMonthDescription(month) {
  //   if (month === "january") {
  //     return "The month is cold";
  //   } else if (month === "february") {
  //     return "The month is cold";
  //   } else if (month === "march") {
  //     return "The month is cold";
  //   } else if (month === "april") {
  //     return "The month is warm";
  //   }

  switch (month) {
    case "january":
    case "february":
    case "march":
      return "The month is cold";
    case "april":
      return "The month is warm";
    default:
      return "Unknown month";
  }
}

const month = "february";

console.log("=".repeat(50));
switch (month) {
  case "january":
  case "february":
  case "march":
    console.log("The month is cold");
    break;
  case "april":
    console.log("The month is warm");
    break;
  default:
    console.log("Unknown month");
}
console.log("=".repeat(50));

// =
// ==
// ===

console.log(getMonthDescription("april"));

function getFullname(a, b) {
  return `${a} ${b}`;
}

console.log(getFullname("Mike", "Smith"));

function calculator(type, val1, val2) {
  switch (type) {
    case "add":
      return `${val1} + ${val2} = ${val1 + val2}`;
    case "sub":
      return val1 - val2;
    case "divide":
      if (val2 > 0) {
        return val1 / val2;
      }
  }

  return "Invalid operation";
}

console.log(calculator("divide", 1, 2));

// const grade1 = 2;
// const grade2 = 5;
// const grade3 = 3;

const grades = [2, 2, 3];

console.log(
  grades[0],
  grades[1],
  grades[2],
  "Ostatni element",
  grades[grades.length - 1]
);

console.log(grades);

function calculateAvg(data) {
  let sum = 0;

  // i++ => i = i + 1
  // i-- => i = i - 1

  for (let i = 0; i < data.length; i++) {
    sum += data[i];
    // sum = sum + data[i];
  }

  return sum / data.length;
}

console.log(calculateAvg(grades));

const student = {
  name: "Mike",
  age: 12,
  grades: [2, 2, 3, 5, 4, 3, 2, 2],
  hello: function () {
    return `Hello ${this.name}`;
  },
  getAvg: function () {
    return calculateAvg(this.grades);
  },
};

console.log(student);

console.log(student.name);

console.log(student.hello());
console.log(student.getAvg());

const client1 = {
  name: "Client #1",
  invoices: [3455, 32323, 12121, 21212],
};
const client2 = {
  name: "Client #2",
  invoices: [3455, 32323, 323, 21212],
};
const client3 = {
  name: "Client #3",
  invoices: [3455, 32321223, 12121, 21212],
};
const client4 = {
  name: "Client #4",
  invoices: [3455, 11212, 12121, 21212],
};
const client5 = {
  name: "Client #5",
  invoices: [3455, 323299, 12121, 21212],
};

const clients = [client1, client2, client3, client4, client5];

for (let i = 0; i < clients.length; i++) {
  let sum = 0;

  for (let j = 0; j < clients[i].invoices.length; j++) {
    sum += clients[i].invoices[j];
  }

  console.log(
    `Klient: ${
      clients[i].name
    }, wartość faktur netto: ${sum}, wartość faktur brutto: ${sum * 1.23}`
  );
}
