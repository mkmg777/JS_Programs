const employees = [
    {id: 1, name: "Alice", department: "Development", skills: ["MongoDB", "Express", "React", "Node.js"]},
    {id: 2, name: "Bob", department: "Development", skills: ["MongoDB", "Express"]},
    {id: 3, name: "Charlie", department: "Development", skills: ["React", "Node.js"]},
    {id: 4, name: "Diana", department: "Quality Assurance", skills: ["MongoDB", "Node.js"]},
    {id: 5, name: "Ethan", department: "Project Management", skills: ["Express", "React"]}
  ];
  
// display total number of employees
console.log(`Total number of employees ${employees.length}`)

//to read array elements in object we use forEach loop
  employees.forEach(ele=>{
    console.log(ele.name)
  })

//display employee names in array form
const r1=employees.map(ele=>ele.name)
console.log(r1)

//find the employee belongs to the development department
const r2=employees.filter(ele=>ele.department="development")
console.log(r2)

//find the employees whose id is 4
const r3=employees.find(ele=>ele.id==4)
console.log(r3)

//find the sum of the values using reduce method o/p-6
const obj={'a':1,'b':2,'c':3}
const r4=Object.values(obj).reduce((acc,cv)=>acc+cv,0)
console.log(r4)

//find the sum of the values using normal method o/p-6
const obj1={'a':1,'b':2,'c':3}
let sum=0
for(let key in obj1){
    sum=sum+obj[key]
}
console.log(sum)

//find the frequency distribution characters using trditional for loop

const result={}
function distribution(str){
    for(let i=0;i<str.length;i++){
        if(str[i] in result){
            result[str[i]]+=1
        }else{
            result[str[i]]=1
        }
    }
    return result
}
console.log(distribution('dddcctcd'))
console.log(distribution('mmmmnn'))

//find the frequency distribution characters using for of loop o/p-{d:4,c:3,t:1}

function distribution1(str){
    const result1={}
    for(let char of str){
        if(char in result1){
            result1[char]+=1
        }else{
            result1[char]=1
        }
    }
    return result1
}

console.log(distribution1('dddcctcd'))
console.log(distribution1('mmmmnn'))

//find the repeating characters in a string o/p=['d','c']
function findRepeating(str){
    const result={}
    for(let i=0;i<str.length;i++){
        if(str[i] in result){
            result[str[i]]
        }
    }
}

console.log(findRepeating('dctdcdc'))
