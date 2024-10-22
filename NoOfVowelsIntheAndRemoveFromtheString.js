const str='bangalore'
const vowels='aeiouAEIOU'
let count1=0,count=0
for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
        count1++
    }
}
console.log(`there are ${count1} vowels in the string`)

for(let char of str){
    if(vowels.includes(char)){
        count++
    }
}
console.log(`there are ${count} vowels in the string`)

//Remove  Vowels From the string
const str1='bangalore'
const vowel='aeiouAEIOU'
let result=''
for(let i=0;i<str.length;i++){
    if(!vowel.includes(str[i])){
        console.log(str[i])
        result=result+str[i]
    }
}
console.log(result)