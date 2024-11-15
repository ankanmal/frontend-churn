//


// Start here
let lol = {
  name: 'Andrew Tate',
  first() {
    console.log(this.name + ' Loves AngularJS');
  },
  second: () => {
    console.log(this.name + ' Loves himself. F Frameworks.');
  },
};

lol.first();
lol.second();


/* After Going through the code this code with the object that has three properties first is name, second is regular function first and third is arrow function
where the key for the second function is 'second'.

The Output will be both the console.log will be printed.

At first glance the the second propert first() looks incomplete like where is the key?, second where is the keyword 'function',
But in ES6 there was a method introduced 'shorthand property' which is a like instead of writing 'first : function first(){}',
we can direct write first(){} and it is valid javascript syntax.


*/