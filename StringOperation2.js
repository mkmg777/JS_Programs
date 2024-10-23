//create a function that takes boolean variable flag and returns it as a string

function boolToString(str){
    console.log(str.toString())
}

boolToString(true)
boolToString(false)

let bool = true;
let text = bool.toString();
console.log(text)

// Greet with love
// Emmy has written a function that returns a greeting to users. However, she's in love with Jack, and would like to greet him slightly differently. She added a special case in her function.

function greeting(str){
    console.log("Hello," + ' '+str+"!")
}
greeting("Matt")
greeting("Helen")

// Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1,str2){
    if(str1.length==str2.length){
        return true
    }else{
        return false
    }
}
// const r1=comp("AB","CD")
console.log(comp("AB","CD"))
const r2=comp("ABC","DE")
console.log(r2)

//IS the String Empty
// create a function that returns the true if a string is empty and false otherwise

function isEmpty(str){
if(str.length==0){
    return true
}else{
    return false
}
}
console.log(isEmpty(''))
console.log(isEmpty(' '))
console.log(isEmpty('a'))

// find the length with using loop
// write a function that returns the length of a string. make your function recursive


function length(str){
    let count=0
    for(let i=0;i<str.length;i++){
        count++
    }
    return count
}
console.log(length("apple"))
console.log(length("make"))
console.log(length("a"))
console.log(length(""))

// return string as an integer
function stringInt(str){
    return parseInt(str)
}
console.log(stringInt('6'))
console.log(stringInt('1000'))
console.log(stringInt('12'))

// concatenate first and lat name into one string
function concatName(str1,str2){
    console.log(str2+', '+str1)
    console.log(str2.concat(', '+str1))
}
concatName("First","Last")
concatName("John","Doe")

// is the string Odd or even
function oddOrEven(str){
    if(str.length%2===0){
        return true
    }else{
        return false
    }
    
}
console.log(oddOrEven("apples"))
console.log(oddOrEven("pears"))

// word without first character
function newWord(str){
    return str.slice(1)
}
console.log(newWord("apple"))
console.log(newWord("cherry"))

// Name greeting
// function helloName(str){
//    const r= [str].map(ele=>{
//         return "Hello "+ele+' !'
//     })
//     return r
    

// }
// console.log(helloName("Gerald"))

function helloName(str) {
    const r = str.map(ele => {
         return "Hello " + ele + "!";
     });
     return r;
 }
 
 console.log(helloName(["Gerald"]))

 const values=["Gerald","Tiffany","Ed"]
const r1=values.map(ele=> "hello "+ele+"!")
console.log(r1)

// convert an array to a string
function arrayToString(arr){
    return arr.join('')
}
console.log(arrayToString([1,2,3,4,5,6]))
console.log(arrayToString(['a','b','c']))

// check string for space
function hasSpace(str){
    if(str.includes(' ')){
        return true
    }else{
        return false
    }
}
console.log(hasSpace("hello"))
console.log(hasSpace("hello, world"))

// slice check repeat concatenate
function frontThree(str){
    return str.slice(0,3).repeat(3)
}
console.log(frontThree("Python"))
console.log(frontThree("Cucumber"))

// Stuttering function
function stutter(str){
    const e=str.slice(0,2)
    return e+'...'+e+'...'+str+'?'
}
console.log(stutter("incredible"))
console.log(stutter("enthusiastic"))

// Default mood
function moodToday(str){
    switch(str){
        case "happy":return `Today , I am feeling ${str}`
        case "sad": return "Today , I am feeling sad"
        case "": return "Today , I am feeling neutral"
    }

}
console.log(moodToday("happy"))
console.log(moodToday("sad"))
console.log(moodToday(""))

// Count the Syllables
function countSyllables(str){
    const syllablescount=(str.length) / (str.split(str[0]).length)
 return syllablescount



}
console.log(countSyllables("Hehehehehehe"))
console.log(countSyllables("bobobobobobobobobo"))
