/*
* 5. Loops
    * for
    * while
    * do...while
    👉 break
    👉 continue

  for(init val; condition; update){
  // code goes here
  }
  9 * 1 = 9
  9 * 2 = 18

*/
// var count = 5
// for (var a = 1; a <= count; a++) {
// 	console.log('Count: ', a)
// }

// var num = 99
// for (var i = 1; i <= 10; i++) {
// 	// 9 * 2 = 18
// 	// var result = num + ' * ' + i + ' = ' + i * num
// 	// console.log(typeof result)
// }
// let i = 1
// while (i <= 5) {
// 	console.log('count: ', i)
// 	i++
// }

// do..while loop
// let i = 5
// do {
// 	console.log('count: ', i)
// 	i++
// } while (i < 5)

// for (let i = 1; i < 10; i++) {
// 	if (i === 5) {
// 		break
// 	}
// 	console.log(i)
// }

// for (let i = 1; i < 10; i++) {
// 	if (i === 5 || i === 8) {
// 		continue
// 	}
// 	console.log(i)
// }

// 6. Strings
//     * String
//     * Immutable
//     * toLowerCase, toUpperCase, trim
//     * slice, concat, includes
//     * Reverse a string

// var message = 'hello'

// var firstCh = message[0].toUpperCase()
// var restCh = message.slice(1) // first index, last index. a + b
// console.log(firstCh + restCh)

// var text = 'Javascript is awesome'
// console.log(text.includes('javascript')) // true/false
// var sentence = 'Hello world, welcome to the universe.'
// var convertSent = sentence.toLowerCase()
// if (convertSent.includes('hello')) {
// 	console.log('Found')
// } else {
// 	console.log('Not Found')
// }

// Reverse a string
// var text = 'Javascript is awesome'
// var temp = ''
// for (var i = 0; i < text.length; i++) {
// 	// console.log(text[i])
// 	temp = text[i] + temp
// }
// console.log(temp)
// 9. Objects
//     * Properties
//     * Methods
//     * Nesting
//     * Looping
// var name = 'ismail'
var person = {
  name: "ismail", //* key : value  = properties
  age: 20,
  isStudent: true,
  address: {
    city: "Barishal",
    country: "Bangladesh",
  },
};
// console.log(person)
// dot notation .
// console.log(person.name)

//  array notation []
// person['age'] = 25
// console.log(person.address.country)

// delete person.address
// console.log(person)
// for (var key in person) {
// 	console.log(key)
// 	console.log(key + ':', person[key])
// }

//
//totalRows Row 1 - Normal Row, Row 4 - Premium Row 3/5 === 0
// var totalRows = 20
// for (let i = 1; i <= 50; i++) {
// 	if (i % 3 === 0 || i % 5 === 0) {
// 		console.log('Row ' + i + ' - ' + 'Premium Row 🚀')
// 	} else {
// 		console.log('Row ' + i + ' - ' + 'Normal Row')
// 	}
// }

// Problem 02: find tag

// solution: 2
// var details = 'this febric is my with iron. and this is for'

// if (details.includes('Cotton')) {
// 	console.log('Material: Cotton')
// } else if (details.includes('Sale')) {
// 	console.log('Category: Sale Item')
// } else {
// 	console.log('Tag: General')
// }

// Problem 03:
/*
*
 * নিয়মাবলী:
👉 প্রথমে lastName এর প্রথম তিনটি অক্ষর ছোট হাতের হবে।
👉 তারপরে employeeId হবে।
👉 এরপরে @ হবে
👉 এরপরে কোম্পানি নাম ছোট হাতের হবে
👉 সর্বশেষে .com হবে।

{ firstName: "John", lastName: "Doe", employeeId: 101, departmentCode: "HR" }

Output:
username: doe101@alphacorp.com
 */
var person01 = {
  firstName: "Ismail",
  lastName: "Jo",
  employeeId: 101,
  departmentCode: "HR",
  companyName: "Alphacorp",
};
var lastThreeCh;
if (person01.lastName.length < 3) {
  lastThreeCh = person01.lastName;
} else {
  lastThreeCh = person01.lastName.slice(0, 3).toLowerCase();
}

// var lastThreeCh = person01.lastName.slice(0, 3).toLowerCase()
var result =
  lastThreeCh +
  person.employeeId +
  "@" +
  person01.companyName.toLowerCase() +
  ".com";
console.log(result);

/**
 * auto close tag
auto complete tag
auto rename tag
monokai
tummorow
console ninja
Cspell

error lens
indent-rainbow
JavaScript (ES6) code snippets
Prettier - Code formatter
TODO Highlight
auto close tag
auto complete tag
auto rename tag
monokai
tummorow
console ninja
Cspell

error lens
indent-rainbow
JavaScript (ES6) code snippets
Prettier - Code formatter
TODO Highlight
*/
