// 1. Create userName
// 2. Display/Print userName
// 3. Display no of Characters in the user Name
// 4. Display last character in userName
// 5. display 1st character in the userName
// 6. Loop over the variables in username using for loop
// 7. Loop over the variables in username using for of loop
// 8. Count No of vowels in the username
// 9. Reverse the username
// 10. Add Something to the username
// 11. Remove vowels in the username
//12. Swap the cases in username
//13. Remove Vowels in the username
//14. String location/index in username
//15. who is hidding in the string


// 1. Create userName
const userName='John'

// 2. Display/Print userName
console.log(userName)

// 3. Display no of Characters in the user Name
console.log(userName.length)

// 4. Display last character in userName
console.log(userName[userName.length-1])

// 5. display 1st character in the userName
console.log(userName[0])

// 6. Loop over the variables in username using for loop
for(let i=0;i<userName.length;i++){
    console.log(userName[i])
}

// 7. Loop over the variables in username using for of loop
for(let char of userName){
    console.log(char)
}

// 8. Count No of vowels in the username
const vowels='aeiouAEIOU'
let count=0
for(let i=0;i<userName.length;i++){
    if(vowels.includes(userName[i])){
        count++
    }
}
console.log(count)

// 9. Reverse the username
let r=''
for(let i=userName.length-1;i>=0;i--){
    r+=userName[i]
}
console.log(r)

const r1=userName.split('').reverse().join('')
console.log(r1)

// 10. Add Something to the username
console.log('my name is'+' ' + userName)

function String(str){
    return str+' '+userName
}
console.log(String('My Name Is'))

// 11. Remove vowels in the username
let newStr=''
for(let i=0;i<userName.length;i++){
    if(vowels.includes(userName[i])){
        newStr+=userName[i]
    }
}
console.log(newStr)

//12. Swap the cases in username
let swap=''
for(let i=0;i<userName.length;i++){
    if(userName[i]===userName[i].toLowerCase()){
        swap+=userName[i].toUpperCase()
    }else{
        swap+=userName[i].toLocaleLowerCase()
    }
}
console.log(swap)

//13. Remove Vowels in the username
let remove=''
for(let i=0;i<userName.length;i++){
    if(!vowels.includes(userName[i])){
        remove+=userName[i]
    }
}
console.log(remove)

//14. String location/index in username
for(let i=0;i<userName.length;i++){
    console.log(i,userName[i],userName.charAt(i))
}

//15. who is hidding in the string
let hide=''
for(let i=0;i<userName.length;i++){
    if(userName[i]===userName[i].toUpperCase()){
        hide+=userName[i]
    }
}
console.log(hide)

let hide1=''
for(let i=0;i<userName.length;i++){
    if(userName[i]===userName[i].toLowerCase()){
        hide1+=userName[i]
    }
}
console.log(hide1)

//16.Number of times character h appers in the username
let c=0
for(let i=0;i<userName.length;i++){
    if(userName[i]==='h'){
        c++
    }
}
console.log(c)

let c1=0
for(let i=0;i<userName.length;i++){
    if(userName[i].includes('h')){
        c1++
    }
}
console.log(c1)