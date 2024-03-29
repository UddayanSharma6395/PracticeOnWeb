console.log("trying to start");
console.log("This is demo page for javaScript");


// const myname="Uddayan Sharma";
// const year=2000;
// console.log("my name is " + myname);
// console.log("my birth year is " + year);

// /*const*/ myname="Kavi Sharma";
// /*const*/ year=2000;
// console.log("my name is " + myname);
// console.log("my birth year is " + year);

var one=1;
var two=2.2;

console.log(one);
console.log(typeof one);
console.log(two);
console.log(typeof two);

// ----------------------Array----------------------

var arr=[10,20,30,40,50,"568", "Uddayan Sharma", 25,true,'a'];
console.log(arr);

// ----------------------objects----------------------

var obj=
{
    name:"Uddayan Sharma",
    id: 190102105,
    age:25,
    test: [10,20,30],
    score: {
        mids: "pass",
        end: "fail"
    }
};
console.log(obj.score.end);

// ----------------------Conditional Statement----------------------
// var num1=20;
// var num2=20;
// // if else conditional statement
// if(num1>=num2)
// {
//     console.log("num1 is greater than num2");
// }
// else
// {
//     console.log("num1 is less than num2");
// }

//-----------------------if else if conditional statement

// if(num1>num2)
// {
//     console.log("num1 is greater than num2");
// }
// else if(num1<num2)
// {
//     console.log("num1 is less than num2");
// }
// else
// {
//     console.log("num1 is equal to num2");
// }

// --------------------Switch conditional Statement

// var num1=20;
// var num2=20;

// switch(num1>=num2){
//     case true:
//         console.log("num1 is greater than num2");
//         break;
//     case false:
//         console.log("num1 is less than num2");
//         break;
//     default:
//         console.log("num1 is equal to num2");
// }


// ----------------------loops----------------------
//for loop, while loop, do while loop

//----------for loop
// for (var i = 0; i < 100; i++) 
// {
//     console.log(i);
// }

//----------while loop
// var i = 0;
// while (i<=100)
// {
//     console.log(i);
//     i++;
// }

// ---------do while loop
// var i=0;
// do
// {
//     console.log(i);
//     i++;
// }while (i <= 100);


// ----------------------functions----------------------

const item = {
    food: 1000,
    drink: 2000
};

cart=0;
var addToCart= (item) => { //arrow function
    return cart+item;
};
var addCartValue = (item) =>{
    cart=addToCart(item);
};
addCartValue(item.food);
console.log(cart);
var cart;// "HOISTING" is a feature in javaScript which automatically moves the declaration to the top of the code 


// -------------------------Arrays-------------------------


var myArray = [1,2,3,4,5,6,7];
console.log(myArray);
myArray.push(8);//add at end
console.log(myArray);
myArray.pop();//remove from end
console.log(myArray);
myArray.unshift(0);//add at front
console.log(myArray);
myArray.shift(myArray);//remove from front
console.log(myArray);


// -------------------------Recursive function------------------------
var num=1;
function printNum()
{
    console.log(num);
    num++;
    
    if(num<=10)
    {
        printNum();
    }
    else
    {
        console.log("Hello");
        return;
    }
}

printNum();

// -------------------------Array example2--------------------------

var arr=[10,20,30];
console.log(arr);

const [x,y,z,a]= arr;// "destructuring" to assign array elements into variables altogether
console.log(x,y,z,a);



//----------------------Maps in JavaScript------------------------

var arr=[10,20,30];

const newArr=arr.map(
    (e) => e+1
);
console.log(arr);
console.log(newArr);

//----------------------Filters in JavaScript------------------------

var arr=[10,20,30,50,60,40];

const newArrfilter=arr.filter(
    (e) => e<50
);
console.log(arr);
console.log(newArrfilter);



//ES6 

//default parameters --------------------------------
function hello(name="world"/*this is how we use default parameters*/)
{
    console.log("Hello "+name);
}
hello("uddayan");

// TEMPLATE LITERALS

console.log("Apple\nMango\nBanana\nPineapple");
console.log("-------------method to print in es6 is using  ` ` marks");
console.log(`Apple
Mango
Banana
Pineapple
`);

//SCOPING

function outer()
{
    var name1="anil";
    let name2="kapoor";

    function inner()
    {
        var name1 = "shahid";
        console.log(name1);
    }
    inner();
    console.log(name1);
}
outer();



//----------------------------Asyncronus JavaScript ----------------------------------------------------

//ASYNCRONoUS JS 
//PROMISES

fetch("https://jsonplaceholder.typicode.com/users")
.then((result) => result.json())
.then((data) => console.log(data));


console.log("----------------------------------------")

//ASYNC AWAIT

const getData = async() => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    console.log(data);
}
getData();