// Repeat String

function repeatString(str,num){
    let result=''
    if(typeof(str)!=='string'){
        return "Not A String!"
    }else{
        return result+=str.repeat(num)
    }


}
console.log(repeatString("Alex",2))
console.log(repeatString("Matt",2))
console.log(repeatString(1990,2))

// Chat-to-ASCII value
function chatToAsci(char){
    return char.charCodeAt()
}
console.log(chatToAsci("A"))
console.log(chatToAsci("a"))
console.log(chatToAsci("m"))
console.log(chatToAsci("["))
console.log(chatToAsci("\\"))

// Case Insensitive Comparision
function match(str1,str2){
    if(str1.toLowerCase()===str2.toLowerCase()){
        return true
    }else{
        return false
    }
}
console.log(match("hello","hELLo"))
console.log(match("motive","emotive"))

// String or Integer
function intOrString(str){
    if(typeof(str)=="string"){
        return "str"
    }else{
        return "int"
    }
}
console.log(intOrString(8))
console.log(intOrString("Hello"))
console.log(intOrString(9874))

// Modifying the last character
function modifyLast(str,num){
    return str.slice(str[0],str.length-1)+str[str.length-1].repeat(num)
}
console.log(modifyLast("Hello",3))
console.log(modifyLast("hey",6))

// How many D's are There?
function countDs(str){
    let count=0
    for(let i=0;i<str.length;i++){
        if((str[i]=='d') || (str[i]=='D')){
            count++
        }
       
    }
    return count
}
console.log(countDs("My friend Dylan got distracted in school"))
console.log(countDs("The rodents hibernated in their den"))

// LowerCse,UpperCase or Mixed
function getCase(str){
    if(str==str.toLowerCase()){
        return "lowerCase"
    }else if( str==str.toUpperCase()){
        return "uppercase"
    }else{
        return "mixedcase"
    }
}
console.log(getCase("whisper..."))
console.log(getCase("SHOUT!"))
console.log(getCase("Indoor Voice"))

// Scottish Screaming
function toScottishScreaming(str){
    str=str.replace(/[aeiouAEIOU]/gi,'e')
    return str.toUpperCase()
    

}
console.log(toScottishScreaming("hello world"))
console.log(toScottishScreaming('Mr. Fox was very naughty'))
console.log(toScottishScreaming('Butterflies are beautiful!'))

// youTube upload count

function uploadCount(arr,str){
    let count=0
    
    for(let i=0;i<arr.length;i++){

        let part=arr[i].split(' ')
        let uploadcount=part[0]
        if(uploadcount==str){
                count++
            }
        // if(part[0]==str){
        //     count++
        // }
    }
    return count

}
console.log(uploadCount(["Sept 22","Sept 21","Oct 15"],"Sept"))
console.log(uploadCount(["Sept 22","Sept 21","Oct 15"],"Oct"))

function uploadCount(arr,str){
    let count=0
    
    for(let i=0;i<arr.length;i++){

        let part=arr[i].split(' ')
        
        if(part[0]==str){
            count++
        }
    }
    return count

}
console.log(uploadCount(["Sept 22","Sept 21","Oct 15"],"Sept"))
console.log(uploadCount(["Sept 22","Sept 21","Oct 15"],"Oct"))

// The Forbidden Letter
function forbiddenLetter(str,arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].indexOf(str)!=-1){
            return false
        }
    }
    return true
}

console.log(forbiddenLetter('r',["rock","paper","scissors"]))
console.log(forbiddenLetter('a',["spoon","fork","knife"]))
console.log(forbiddenLetter('m',[]))

// The Forbidden Letter
function forbiddenLetter(str,arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].includes(str)){
            return false
        }
    }
    return true
}

console.log(forbiddenLetter('r',["rock","paper","scissors"]))
console.log(forbiddenLetter('a',["spoon","fork","knife"]))
console.log(forbiddenLetter('m',[]))

// get word count
function countWords(str){
    let count=0
    const result=str.split(' ')
    for(let i=0;i<result.length;i++){
        count++
    }
    return count
}
console.log(countWords("Just an example here move along"))
console.log(countWords("This is a test"))
console.log(countWords("What an easy task, right"))

// Letters only
function lettersOnly(str){
    return str.replace(/[^a-zA-Z]/g,'')
}
console.log(lettersOnly("R!=:~0o0./c&}9k`60=y"))
console.log(lettersOnly("^,]%4B|@56a![0{2m>b1&4i4"))
console.log(lettersOnly("^U)6$22>8p)."))

// check if a string contains only identical characters
function isIdentical(str){
   return str.split('').every(ele=>ele==str[0])
}

console.log(isIdentical('aaaaaaa'))
console.log(isIdentical('aabaaa'))
console.log(isIdentical('cccca'))
console.log(isIdentical('kk'))

function isIdentical(str){
    let result=''
    for(let i=0;i<str.length;i++){
        if(str[0]==str[i]){
            result=result+str[i]
        }
    }
    if(result==str){
        return true
    }else{
        return false
    }
 }
 
 console.log(isIdentical('aaaaaaa'))
 console.log(isIdentical('aabaaa'))
 console.log(isIdentical('cccca'))
 console.log(isIdentical('kk'))

//  Get the file Extension
function getExtension(arr){
    return arr.map(ele=>{
        let part=ele.split('.')
        // console.log(part)
        return part[part.length-1]
    })
}

console.log(getExtension(['code.html','code.css']))
console.log(getExtension(['project1.jpg','project1.pdf','project1.mp3']))

// The full length of a google
function googlify(n){
    // const letter='o'
    if(n<=1){
        return 'invalid'
    }
    return 'G'+ 'o'.repeat(n)+'gle'
}
console.log(googlify(10))
console.log(googlify(23))
console.log(googlify(2))
console.log(googlify(-2))

function googlify(n){
    const letter='o'
    if(n<=1){
        return 'invalid'
    }
    return 'G'+ letter.repeat(n)+'gle'
}
console.log(googlify(10))
console.log(googlify(23))
console.log(googlify(2))
console.log(googlify(-2))

// Is the STring a Palindrome
function chackPalindrome(str){
    let result=str.split('').reverse().join('')
    if(str==result){
        return true
    }
    return false
    
}
console.log(chackPalindrome('mom'))
console.log(chackPalindrome('scary'))
console.log(chackPalindrome('reviver'))
console.log(chackPalindrome('stressed'))

//  Is the STring a Palindrome
function chackPalindrome(str){
   for(let i=0;i<(str.length)/2;i++){
    // console.log(str[str.length-1])
    if(str[i/2]!=str[str.length-1]){
        
        return false
    }else{
        return true
    }
   }
    
}
console.log(chackPalindrome('mom'))
console.log(chackPalindrome('scary'))
console.log(chackPalindrome('reviver'))
console.log(chackPalindrome('stressed'))

// check if the same case
function sameCase(str){
    if(str==str.toLowerCase() || str==str.toUpperCase()){
        return true
    }
    return false
}
console.log(sameCase('hello'))
console.log(sameCase('HELLO'))
console.log(sameCase('Hello'))
console.log(sameCase('ketcHUp'))