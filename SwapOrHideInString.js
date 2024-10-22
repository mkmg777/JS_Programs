//who is hiding in the string
const str='jjjRbvbcEffSgfgchgT'
let result='',r2=''

for(let i=0;i<str.length;i++){
    if(str[i]===str[i].toUpperCase()){
        result=result+str[i]
    }
}
console.log(result)

for(let char of str){
    if(char==char.toUpperCase()){
        r2+=char
    }
}
console.log(r2)

//only lower case letters in the string
const str2='Bangalore'
let r3='',r4=''
for(let i=0;i<str2.length;i++){
    if(str2[i]===str2[i].toLowerCase()){
        r3+=str2[i]
    }
}
console.log(r3)

for(let char1 of str2){
    if(char1==char1.toLowerCase()){
        r4+=char1
    }
}console.log(r4)

//Swapping the String.
const str3='Bangalore'
let r5=''
for(let i=0;i<str3.length;i++){
    if(str3[i]===str3[i].toLowerCase()){
        r5+=str3[i].toUpperCase()
    }else{
        r5+=str3[i].toLowerCase()
    }
}
console.log(r5)

let r6=''
for(let char2 of str3){
    if(char2===char2.toLowerCase()){
        r6+=char2.toUpperCase()
    }else{
        r6+=char2.toLowerCase()
    }
}
console.log(r6)
