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

// js exponettional oparetor to find the suqre of value lik that

console.log(2**2) //output 4
console.log(5**2) //25

//// ES8  modules

// obeject entites  this method return an array key & value as an array


let colleg={
    brach:"ECE",
    section:"A",
    strength:"90",
    boys:"45",
    girls:"35"
}

let objArray=Object.entries(colleg) //object.entries is key pair convert into the single arry 
console.log(objArray)

let objArryvalues=Object.values(colleg)
console.log(objArryvalues)


////ES10 modules


//flat flat method is used to convert into nested array's into single array

let nested=[1,2,3,[1,4,[5,6,[30,40],60]]]

let fletd=nested.flat(3)


console.log(fletd)

/// to string
///trimStart deleted the Empty spaces from the begining of the word
/// trimEnd deleted the empty spaces from the end of the array

/// objectFrom Entries this array contvertd into object


let fromObj=[["name","gattu"], ["age",35],["current job", "Network Engineer"]]

console.log(Object.fromEntries(fromObj))


/// ES11

let intention=null // wen add the data nullesh opartor for intentionally to mention empty
// Optinal Chaining  is a safe way to access 

//ES12 

/// logical  oparator

console.log(20 && 30) /// output 30 given right side value

console.log(20||30) /// output 20 given left side value

//OOP concepstents
// OOPs object orianted programing its all abount claas and Objects 

// oops as 4 diffrent concepts 
//Absctrion hiding the unnesassory imfotmation from the users.

class ATM{
    constructor(withdra){
        this.balance=1000;
        
        this.withdra=withdra
    }
    getAmount(){
        let minbalance=500
        if(this.balance-this.withdra>=minbalance){
            console.log("Withdra Successful")
        }
        else{
            console.log("insfficent balance")
        }
    }
}


let Amount= new ATM(500)
Amount.minbalance=0

console.log(Amount.getAmount())


/// Enchapulestion : IT is an Mechanism of bundling data variables and methods together & hides them from other classes.

class Person{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }

    getName(){
        console.log(this.name)
    }
    getAge(){
        console.log(this.age)
    }
    getSalary(){
       console.log(this.salary)
    }
}

let ObjPerson=new Person("shiva",25,50000);
ObjPerson.getAge()
ObjPerson.getName()
ObjPerson.getSalary()

