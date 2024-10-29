// create object

const menu={
    coffee:10,
    tea:2
}

// display object
console.log(menu)

// display coffee value
console.log(menu.coffee)
console.log(menu['coffee'])
console.log(menu['tea'])

// know the propert
console.log(typeof("coffee"))
console.log(typeof (coffee))

// display only keys
console.log(Object.keys(menu))

// display only values
console.log(Object.values(menu))

// display key value pairs in the form of array
console.log(Object.entries(menu))

// to know the no of key value pairs in object
console.log(Object.keys(menu).length)

//to check object is empty or not
console.log(Object.keys(menu).length==0)

//create a new object called as student
const student={}

//Add element to object
student.firstName="John"
student.city="bengalore"

// display in the form of object
console.log(student)

console.log(Object.keys(student))
console.log(student.firstName)
console.log(student["firstName"])

//Remove Key:Value pair
delete student.city
console.log(student)

//Update Key:value pair
student.firstName="John G G"
console.log(student)

// Looping an object
for(let key in student){
    console.log(key) //Accesss keys
    console.log(student[key]) //Access values
    console.log(key, student[key])  //access key value pairs
}