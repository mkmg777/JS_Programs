// Deep Copy method of Objects
// There are 3 types
// 1. Object.assign() method
// 2. Spread Operator [...]
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