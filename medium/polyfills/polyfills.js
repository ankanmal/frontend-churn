// Write your code here
let data = [1, 2, 3, 4, 5];

// Map pollyfill
Array.prototype.myMap = function (cb) {
  let arr=[]
  for(let i=0;i<this.length;i++){
    arr.push(cb(this[i],i,this))
  }
  return arr;
};
const mapLog = data.myMap((el) => el * 2);
console.log(mapLog);

// Filter pollyfill
Array.prototype.myFilter = function (cb) {
  let arr=[];
  for(let i=0;i<this.length;i++){
    if(cb(this[i],i,this)){
      arr.push(this[i])
    }
  }
  return arr;
};
const filterLog = data.myFilter((el) => el < 4);
console.log(filterLog);

// Reduce pollyfill
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};
const reduceLog = data.myReduce((el) => el + 4);
console.log(reduceLog);

// Promise.all() implementation
const myPromiseAll = (promises) => {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => {
        result.push(res);

        if (index === promises.length - 1) {
          resolve(result);
        }
      }).catch((err) => reject(err));
    });
  });
};
myPromiseAll([
  Promise.resolve('hi'),
  Promise.resolve('bye'),
  Promise.resolve('exit'),
])
  .then((value) => console.log(value))
  .catch((err) => console.log(err));

