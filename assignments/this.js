/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - When in the global scope, "this" will be the window/console Object
* 2. Implicit - When a function is called by a preceding dot, the object left of the dot will be "this"
* 3. New - Whenever a constructor function is used, "this" refers t0 the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit - Whenever a call or apply method is used, "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
function sayName(name) {
	console.log(this);
	return name;
}
sayName('Amine');
// code example for Window Binding

// Principle 2

const myObj = {
	greeting : 'Hello',
	sayHello : function(name) {
		console.log(`${this.greeting} my name is ${name}`);
		console.log(this);
	},
};
myObj.sayHello('Amine');
// code example for Implicit Binding

// Principle 3
function Person(obj) {
	this.name = obj.name;
	this.age = obj.age;
	this.speak = function() {
		console.log('new binding', this);
		return 'Hello, my name is ${this.name}, and I am ${this.age} years old.';
	};
}

const amine = new Person({ name: 'Amine', age: 35 });
const shana = new Person({ name: 'Shana', age: 32 });

shana.speak();
amine.speak();
// code example for New Binding

// Principle 4
function Person(obj) {
	this.name = obj.name;
	this.age = obj.age;
	this.speak = function() {
		console.log('Explicit binding', this);
		return 'Hello, my name is ${this.name}, and I am ${this.age} years old.';
	};
}

const andy = new Person({ name: 'Andy', age: 35 });
const curtis = new Person({ name: 'Curtis', age: 32 });

curtis.speak.apply(andy);
andy.speak.call(curtis);

curtis.speak();
andy.speak();
// code example for Explicit Binding
