//falsy values - 0,false,'',null,undefined,NaN
//truthy values - values that are not falsy are truthy

//falsy values output

console.log(0,Boolean(0))
console.log(false,Boolean(false))
console.log('',Boolean(''))
console.log(null,Boolean(null))
console.log(undefined,Boolean(undefined))
console.log(NaN,Boolean(NaN))

//truthy values output
console.log(1,Boolean(1))
console.log(-1,Boolean(-1))
console.log(true,Boolean(true))
console.log('a',Boolean('a'))
console.log([],Boolean([]))
console.log([10,20],Boolean([]))
console.log({},Boolean({}))
console.log({name:'aaa'},Boolean({name:'aaa'}))

//conditionals or loops

    // if(0)
    // if(false)
    // if('')
    // if(null)
    // if(undefined)   
    if(NaN)  
    {
        console.log('true statements are executed')
    }
    else{
        console.log('false statements are executed')
    }

//true statements are executed
// if(1)  
    // if(-1)
    // if([])
    // if([10,20])
    // if({})
    // if({name:'megha'})
    if('dct')
        {
            console.log('true statements are executed')
        }
        else{
            console.log('false statements are executed')
        }