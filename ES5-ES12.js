// ES5 version had multiful updates are intraduced


//isArray()


let  arr=[1,2,3,4,5,6];

let isarray =Array.isArray(arr) //isArray method give value checking is array are not if array true else false
console.log(isarray)


//map: map method itrested the in array itesm and return new array. we can perfrom operation on each value

console.log(arr.map(item=>item+5))

const names = ["Alice", "Bob", "Charlie"];

let upper=names.map(item=>(item[0].toLowerCase()+ item.slice(1).toUpperCase()));
/// output=[ 'aLICE', 'bOB', 'cHARLIE' ]

console.log(upper)



//filter() filter method itreis the each value restun a new array as the result 
//filter() creates a new array containing only the elements from the original array that pass a test you provide (as a function).

console.log(arr.filter(num=>num>4))

// every() evrey method restun treu all the arrey item spefic the give satiffies the condtion else return false

console.log(arr.every(item=>item>0))

///some() this method return true if given array of item atleast one is condition saticfice return true otherwise return false.

let arr2=[-3,-5,6,7,8]
console.log(arr2.some(item=>item<5))


//indexOf() this method return the first occrence of element of index

console.log(arr2.indexOf(-5))

//lastIndexof() this method return the last occrences of element of index value

let arr3=[1,3,5,5,5,6,9,13,9]

console.log(arr3.lastIndexOf(9))


arr3.forEach(item=>console.log(item*2))

//stringfy

let obj={
    name:"shivakumar",
    age:"24",
    email:"gshiva@gmai.com"
}

let json=JSON.stringify(obj)
console.log(json)

let presentdate=new Date()
console.log(presentdate)

/////   ES6 modules

// intraduce ES6  let & const thes two key word use to create the variable in js 
// let has the block level scope, initialazation is not require that can reasgin the value but we can not redefine the value.
// const has create a veriable intilaztion required once's we can create we not reassign the value & redefinde the values.

// arrow function 

//class

class User{

    constructor(arr1,arr2){
        this.arr1=arr1
        this.arr2=arr2
    }
    add(arr1,arr2){
        console.log(arr1+ arr2)
    }
    sub(arr1,arr2){
        console.log(arr1-arr2)
    }
    multi(arr1,arr2){

        console.log(arr1*arr2)
    }

    div(arr1,arr2){
        console.log(arr1/arr2)
    }
}
let obj1 =new User()
obj1.add(10,30)
obj1.multi(1500,3)
obj1.sub(1000,990)

/// for of itres the values each values 

for (let a of arr ){
    console.log(a)
}

// default parameter if value is pre definde for the to an args we 

function employe(name,age="20", email="tata.tel.com"){

    console.log(`userName:${name} and age:${age} email:${email}`)
}

employe("shiva",24)

//spred operoter spered oprertiused to unpack arry values.

let arrvalu=[1,3,4,5,6]
let arrvl1=[2,7,8,9]
let mix=[...arrvalu, ...arrvl1]
console.log(mix)

//rest oparetor is pack the values into array

function Recipemade (recpi,grams,...ingredence){
 
    console.log(`Recipi Name is ${recpi}`)
    console.log(`number of  ${grams}`)
    console.log(`Recipi Name is ${ingredence}`)

}

Recipemade("biriyani","1kg","oil","masala", "kothimeeri")


/// disture the values

let college={
    brach:"ECE",
    section:"A",
    strength:"90",
    boys:"45",
    girls:"35"


}

const {brach,section,boys,girls}=college;
console.log(brach)
console.log(girls)
console.log(boys)


////  ES7 
//includes this method if the user is found in given array return true othe wise return false

console.log(arr.includes(10))
