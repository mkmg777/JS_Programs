//copying Arrays to variables and it's a Shallow Copy of variable  

let a=[10]
let b=['apple']

console.log('a',a)
console.log('b',b)

//copy reference of a into c
let c=a

console.log('a',a)
console.log('c',c)

a.push(20)
console.log('a',a)
console.log('c',c)

c.push(30)
console.log('a',a)
console.log('c',c)

//Copying of objects to variables it's a Shallow Copy of variable
let person={
    name:'john'
}

console.log(person)

let student=person
console.log(person)
console.log(student)

person.name='kk'
console.log(person)
console.log(student)

student.name='ll'
console.log(person)
console.log(student)