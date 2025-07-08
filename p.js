const arr=[1,0,2,3,4,0]

function largest(arr){
    arr.sort((a,b)=>b-a);

    for(let i=1;i<=arr.length;i++){
        if(arr[i]!==arr[0]){
            return arr[i]
        }
    }
}
console.log(largest(arr))


function k(arr){
    let r=[], m=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            r.push(arr[i])
        }else{
            m.push(arr[i])
        }
        
    }
    return (r.concat(m))
}
console.log(k([1,0,2,0,3,4,0]))


function m(str){
    const r={}
    for(let i=0;i<str.length;i++){
        if(str[i] in r){
            r[str[i]]+=1
        }else{
            r[str[i]]=1
        }
    
    }
    return r
}
console.log(m('dctdct'))


// Find the Intersection of Two Arrays in JavaScript?
// In the given code set is used to store a unique values from arr2 then filter checks each element in arr1 to see if it is also exist in the set and keeping only those that matches. The output is an array of common elements from both arr1 and arr2.

function arrayIntersection(arr1,arr2){
    const set1=new Set(arr2)
    return result=arr1.filter(ele=>set1.has(ele))
}
console.log(arrayIntersection([5, 6, 7], [6, 7,8 ]));

// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.

// The fibonacci function generates the Fibonacci sequence up to n terms. It initializes two variables num1 (0) and num2 (1). In a loop, it prints num1, then calculates the next number as the sum of num1 and num2, updating them for the next iteration. Here, it prints 7 terms.

function fibonacci(num){
       let num1=0,num2=1,num3
        for(let i=0;i<num;i++){
            console.log(num1)
            num3=num1+num2
            // console.log(num3)
            num1=num2
            num2=num3
        }
}
fibonacci(7)


// 38. Remove falsy Values from an array in JavaScript?
// The falsy values in JavaScript are values which are false, 0, "" (empty string), null, undefined, and NaN.

// The removeFalsyValues() function takes an array and filters out falsy values (0, false, ''). It creates an empty array answer[], then iterates through the input array. If an element is truthy, it adds it to answer[]. Then, it returns the array of truthy values

const array=[0, 5, false, 6, '', 7]
const r1=array.filter(Boolean)
console.log(r1)

function removeFalsyValues(arr) {
    const answer = []; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            answer[answer.length] = arr[i]; 
        }
    }
    return answer;
}

console.log(removeFalsyValues([0, 5, false, 6, '', 7]));

// factorial of a number
function fact(num){
    if(num==1 || num==0){
        return 1
    }else{
        return num*fact(num-1)
    }
}
console.log(fact(3))