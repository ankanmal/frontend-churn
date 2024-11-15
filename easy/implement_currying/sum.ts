
// Correct way to implement this currying is to the sum function, because there after adding two numbers i am checking whether there is another variable there or not
// if there is no variable than we return the previous sum value and if there is varibable we continue with the sum(a +b) that will update the varible a to the sum of a + b

let sum = function (a) {
  return (b) => {
    return b ? sum(a + b) : a;
  };
};
let sum3 = function (a) {
  // Write your code here
  return function (b) {
    return function (c) {
      return function () {
        return a + b + c;
      };
    };
  };
};

let sum1 = (a) => {
  return (b) => {
    return (c) => {
      return () => {
        return a + b + c;
      };
    };
  };
};
let sum2 = (a) => (b) => (c) => () => a + b + c;
console.log(sum(1)(2)(5)());
console.log(sum3(1)(9)(5)());
console.log(sum1(2)(1)(6)());
console.log(sum2(5)(7)(1)());
