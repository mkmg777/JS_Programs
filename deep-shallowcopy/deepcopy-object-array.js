// Deep Copy method of Objects
// There are 3 types
// 1. Object.assign() method
// 2. Spread Operator {...}
// 3.JSON.stringify() +JSON.parse() method

let person={
    name:'john',
    city:'delhi'
}
console.log('person',person)

//Method 1 - Object.assign(target,Source)
let student=Object.assign({},person)
console.log(student)
console.log(person)

//Method 2- Spread Operator[...]
let student1={...person}
console.log(student1)

person.name='jjj'
console.log(person)

person.class=3
console.log(person)

student1.name='kkk'
console.log(student1)
console.log(person)

//Deep copy Array methods -
//There are 4 Methods
//1. Array Slice Method
//2.Array concat Method
// 3.Array Spread Operator [...] -3 dots
//4.JSON.stringify()+JSON.parse() method

let a=[10]
let b=['apple']
console.log('a',a)
console.log('b',b)

//Deep copy of Array Method 1 using Slice 
//from 0th index it's copying all the array values of a variable c
let c=a.slice(0)

console.log('c',c)

a.push(20)
console.log('a',a)
console.log('c',c)

c.push(30)
console.log('a',a)
console.log('c',c)

//Deep copy of Array method 2 concat
let d=[].concat(a)

console.log('d',d)

d.push(40)
console.log('d',d)

// Deep copy of Array method 3 Spread operator
let e=[...a]

console.log('e',e)

e.push(50)
console.log('e',e)

console.log('a',a)
console.log('c',c)
console.log('d',d)
console.log('e',e)
