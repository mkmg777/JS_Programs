//In an array, print the length of the each character in the array
const names=['Megha','yogi','Kavya','Divya']
const result=names.map(ele=>ele.length)
console.log(result)

//In an array, print the length of the each character in the array
const name=['Megha','yogi','Kavya','Divya']
let r=[]
for(let i=0;i<name.length;i++){
    r.push(name[i].length)
}
console.log(r)

// Print the positive numbers in an array
const number=[10,20,-10,-5,30]
const r1=number.filter(ele=>ele>0)
console.log(r1)

// Print the positive numbers in an array
const n=[10,20,-10,-5,30]
let r2=[]
for(let i=0;i<n.length;i++){
    if(n[i]>0){
        r2.push(n[i])
    }
}
console.log(r2)

//priting the array elements in reverse order 
const fruits=['mango','watermelon','grapes']
let r3=[]
for(let i=fruits.length-1;i>=0;i--){
    r3.push(fruits[i])
}
console.log(r3)

// priting the array elements in reverse order 
const fruit=['mango','watermelon','grapes']
// const reverse=fruit.slice().reverse()
const reverse=fruit.reverse()
console.log(reverse)
fruit.reverse().forEach(ele=>console.log(ele))

//priting the array elements in order  using es6 feature
const f=['mango','watermelon','grapes']
const r4=f.map(ele=>ele)
console.log(r4)

for(let char of f){
    console.log(char)
}

const r5=[...f]
console.log(r5)

const r6=Array.from(f)
console.log(r6)

f.forEach(ele=>console.log(ele))

//Uppercase printing
const players=['virat','sachin','dravid','ganguly']
players.forEach(ele=>console.log(ele.toUpperCase()))

const r7=players.map(ele=>ele.toUpperCase())
console.log(r7)

// using function adding 3 to array elements
const numbers=[10,15,20,25]
const r8=numbers.map(ele=>ele+3)
console.log(r8)

let r9=[]
for(let i=0;i<numbers.length;i++){
    r9.push(numbers[i]+3)
}
console.log(r9)

//return all the password whose length is 8 & above

const passwords=['secrete','secrete123','secrete@123']
const r10=passwords.filter(ele=>ele.length>8)
console.log(r10)

//return all the strings which contain character 'a'

const alpha=['abc','xab','bcd','acd','def']
//o/p-['abc','xab','acd']
const r11=alpha.filter(ele=>ele.includes('a'))
console.log(r11)

//Rounding numbers

const num=[9.9,10.4,11.3,12.5]
//o/p- [10,10,11,13]
const r12=num.map(ele=>Math.round(ele))
console.log(r12)


//remove numbers in an array
const arr2=[10,'ten',11,'eleven']
//o/p- ['ten','eleven']
const r13=arr2.filter(ele=>{
    if(typeof(ele)=='string'){
        return true
    }
})
console.log(r13)

//converting Numbers in array to string
const arr3=[10,11,12,13]
const r14=arr3.map(ele=>ele.toString())
console.log(r14)

//Sum of array elements using reduce method
const num2=[10,20,30,40]
const r15=num2.reduce((acc,cv)=>{
    return acc+cv
},0)
 console.log(r15)


//return even numbers in an array using filter method
const no=[10,11,12,13,14]
const r16=no.filter(ele=>ele%2==0)
console.log(r16)

//return even numbers in an array using reduce method
const no1=[10,11,12,13,14]
const r17=no1.reduce((acc,cv)=>{
    if(cv%2==0){
        acc.push(cv)
    }
    return acc
},[])
console.log(r17)

// print array elements in single line

const arr5=['javascript','is','awesome']
//o/p - 'javascriptisawesome
const r18=arr5.reduce((acc,cv)=>acc+cv)
console.log(r18)

// find the 1st element in an array which is greater than 22 , using array find method
const no3=[10,11,12,13,20,25,30]
const r19=no3.find(ele=>ele>22)
console.log(r19)

// using traditional method find the 1st element in an array udsing array find method
let r20=[],r21

for(let i=0;i<no3.length;i++){
    if(no3[i]>22){
        r21=no3[i]
        r20.push(no3[i]) 
        break
    }
}
console.log(r20)
console.log(r21)

//return all the elements present in even index
const arr=[10,11,12,13,14]
const r22=arr.filter((ele,i)=>{
    if(i%2==0){
        return ele
    }
})
console.log(r22)

//Add 2 to every even number and 3 to every odd number
const arr1=[10,11,12,13,14]
const r23=arr1.map(ele=>{
    if(ele%2==0){
        return ele+2
    }else{
        return ele+3
    }
})
console.log(r23)