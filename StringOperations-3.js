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