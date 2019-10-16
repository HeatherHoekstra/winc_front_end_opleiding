const optellen1 = (...num) => {
  return num.reduce((prev, curr) => {
    return prev + curr;
  });
};

console.log(optellen1(12, 3, 4, 8, 20));

let numbers = [10, 40, 23];

const optellen2 = (a, b, c) => {
  return a + b + c;
};

console.log(optellen2(...numbers));
