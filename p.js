// const arr=[1,0,2,3,4,0]

// function largest(arr){
//     arr.sort((a,b)=>b-a);

//     for(let i=1;i<=arr.length;i++){
//         if(arr[i]!==arr[0]){
//             return arr[i]
//         }
//     }
// }
// console.log(largest(arr))


// function k(arr){
//     let r=[], m=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==0){
//             r.push(arr[i])
//         }else{
//             m.push(arr[i])
//         }
        
//     }
//     return (r.concat(m))
// }
// console.log(k([1,0,2,0,3,4,0]))


// function m(str){
//     const r={}
//     for(let i=0;i<str.length;i++){
//         if(str[i] in r){
//             r[str[i]]+=1
//         }else{
//             r[str[i]]=1
//         }
    
//     }
//     return r
// }
// console.log(m('dctdct'))


// // Find the Intersection of Two Arrays in JavaScript?
// // In the given code set is used to store a unique values from arr2 then filter checks each element in arr1 to see if it is also exist in the set and keeping only those that matches. The output is an array of common elements from both arr1 and arr2.

// function arrayIntersection(arr1,arr2){
//     const set1=new Set(arr2)
//     return result=arr1.filter(ele=>set1.has(ele))
// }
// console.log(arrayIntersection([5, 6, 7], [6, 7,8 ]));

// // The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.

// // The fibonacci function generates the Fibonacci sequence up to n terms. It initializes two variables num1 (0) and num2 (1). In a loop, it prints num1, then calculates the next number as the sum of num1 and num2, updating them for the next iteration. Here, it prints 7 terms.

// function fibonacci(num){
//        let num1=0,num2=1,num3
//         for(let i=0;i<num;i++){
//             console.log(num1)
//             num3=num1+num2
//             // console.log(num3)
//             num1=num2
//             num2=num3
//         }
// }
// fibonacci(7)


// // 38. Remove falsy Values from an array in JavaScript?
// // The falsy values in JavaScript are values which are false, 0, "" (empty string), null, undefined, and NaN.

// // The removeFalsyValues() function takes an array and filters out falsy values (0, false, ''). It creates an empty array answer[], then iterates through the input array. If an element is truthy, it adds it to answer[]. Then, it returns the array of truthy values

// const array=[0, 5, false, 6, '', 7]
// const r1=array.filter(Boolean)
// console.log(r1)

// function removeFalsyValues(arr) {
//     const answer = []; 
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             answer[answer.length] = arr[i]; 
//         }
//     }
//     return answer;
// }

// console.log(removeFalsyValues([0, 5, false, 6, '', 7]));

// // factorial of a number
// function fact(num){
//     if(num==1 || num==0){
//         return 1
//     }else{
//         return num*fact(num-1)
//     }
// }
// console.log(fact(3))

// given the numbern, find out and return the number of digits present in a number.

const num=123
const r1=num.toString().length
console.log(r1)

function digit(num){
    let count=0
    while(num>0){
        
        num=Math.floor(num/10)
        count++
        
    }
    return count
}
console.log(digit(123))

// get the reversed number without trailing zeros,
const k=401000,m=[]
const rev=k.toString().split('').reverse()

console.log(rev)

for(let i=0;i<rev.length;i++){
    if(rev[i]!=="0"){

        m.push(...rev.slice(i))
        break
    }
}
console.log(m.join(''))

const l=k.toString().split('').reverse().join('').replace(/0+/,'')  //(/0+/,'') replace the leading 0's
console.log(l)

// palidrome 
const num1=1212
const r2=num1.toString().split('').reverse().join('')
console.log(r2)
if(num1.toString()===r2){
    console.log(true)
}else{
    console.log(false)
}

// Armstrong Number  371=3 cube+7 cube + 1 cube=sum=371 we get the same resultant number
const num2=371
const r3=num2.toString().split('').map(ele=>ele**3).reduce((acc,cv)=>acc+cv,0)
console.log(r3)

// print all divisors
const num3=36
for(let i=0;i<=num3;i++){
    if(num3%i==0){
        console.log(i)
    }
}

// prime number

const num4=12
let count1=0
for(let i=1;i<=num4;i++){
    if((num4 % i==0 )){
        count1++
    }
}
if(count1 ==2){
    console.log(true)
}else{
    console.log(false)
}


// GCD of  the number 9 and 12
  
// repet the string
const s='megha'
const r4=s.repeat(2)
console.log(r4)

// pattern printing

// for( let i=0;i<4;i++){
//     let row=""
//     for(let j=0;j<4;j++){
//         row+="*" 
//     }
//     console.log(row)
// }

// parttern printing in increasing order
 function pattern(n) {
    for(let i = 0; i < n; i++) {
        let row1 = "";
        for(let j = 0; j <= i; j++) {
            row1 += "*";
        }
        console.log(row1);
    }
}
pattern(3)

// numbers pattern

function numpat(n){
    for(let i=1;i<n;i++){
        let row=0
        for(let j=1;j<=i;j++){
            row=row+j + " "
        }
        console.log(row)
    }
}
numpat(5)

function numpattern(n){
    for(let i=1;i<n;i++){
        let row=0
        for(let j=1;j<=i;j++){
            row=row+i + " "
            
        }
        console.log(row)
        
    }
}
numpattern(5)

 function patternn(n) {
    for(let i = 0; i < n; i++) {
        let row1 = "";
        for(let j = 0; j <= i; j++) {
            row1 +="*";
        }
        console.log(row1);
    }
}
patternn(3)

 function patternns(n) {
    for(let i = 0; i < n; i++) {
        let row1 = "";
        for(let j = 0; j <n-i-1; j++) {
            row1 =row1+" "
        }
        for(let j = 0; j < 2*i-1; j++){
            row1+="*"
        }
        for(let j = 0; j < n-i-1; j++) {
            row1 =row1+" "
        }
        console.log(row1);
    }
}
patternns(5)

console.log("khj")
function pa(n) {
    for(let i = 0; i < n; i++) {
        let row1 = "";
        for(let j = 0; j <=i; j++) {
            row1 =row1+" "
        }
        for(let j = 0; j < 2*n -(2*i+1); j++){
            row1+="*"
        }
        for(let j = 0; j < i; j++) {
            row1 =row1+" "
        }
        console.log(row1);
    }
}
pa(5)

// factorial of a number

function factorialNumber(num){
    let result=1
    for(let i=2;i<=num;i++){
        result=result*i
    }return result
}
console.log(factorialNumber(3))

// Check if a String Contains Another String in JavaScript?
function Anotherstring(str1,str2){
    if(str1.includes(str2)){
        return true
    }else{
        return false
    }
}
console.log(Anotherstring("HiHello","Hi"))
console.log(Anotherstring("HiHello","Ho"))

// Remove falsy Values from an array in JavaScript?
const falsyValue=['',0,false,NaN,undefined]
function values(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        // if(arr[i]){
        //     res.push(arr[i])
        // }
         if(!falsyValue.includes(arr[i])){
            res.push(arr[i])
        }
        
    }return res
}
console.log(values([1,'',3,0]))

// Find the maximum difference between two numbers in an array in JavaScript?

function maxDifference(arr){
    let mindiff=arr[0],maxDiff=0
    for(let i=1;i<arr.length;i++){
        diff=arr[i]-mindiff
        maxDiff=Math.max(maxDiff,diff)
        mindiff=Math.min(mindiff,arr[i])
    }
    // return maxDiff
    return mindiff
}
console.log(maxDifference([1, 2, 90, 10, 110]));