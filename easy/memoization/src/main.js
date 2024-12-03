import './style.css'

import viteLogo from '/vite.svg'


document.querySelector('#app').innerHTML = `
  <div>
  <h1>The output is in the console.</h1>
  </div>
`

function memo(fn, context) {
  let res = {};

  return function (...args) {
    let stringifiedArgs = JSON.stringify(args);
    if (!res[stringifiedArgs]) {
      res[stringifiedArgs] = fn.call(context || this, ...args);
    }

    return res[stringifiedArgs];
  };
}

const product = (num1, num2) => {
  // Long function
  for (let i = 0; i < 400000; i++);
  return num1 * num2;
};

const memoProduct = memo(product);

const first = performance.now();
console.log(`Result: `, memoProduct(123893, 1299123));
console.log('Time: ', performance.now() - first);

const second = performance.now();
console.log(`Result:`, memoProduct(123893, 1299123));
console.log('Time: ', performance.now() - second);
