alert("i am an alert");
console.log("this is log");
let x = 10; // let and var are same the only diff is that let is a newly introduced keyword.
var y = 11;
const z = 12; // const is used to make variable constant.
x = 16; //we can reassign the let or var variables but we can't reassign const variable.
y = 15;
let s = "rishabh singh";
s = s.toUpperCase();
console.log(x);
console.log(y);
console.log("hi my fav num is " + x);
console.log(`this can be used instead of " " or ' ' and to add text we use ${s}`);
let a = ["rishabh" , "sharad" , "rajeev", 10, 20.32 ];
console.log(a);
console.log(a.concat(x));
s = Array.from(s);
s = s.reverse();
console.log(s.toString());
for (let index = 0; index < 5; index++) {
    console.log(index);
}
// this is a expression function
const message = function(a , b) {
    console.log("this is a  message ");
    console.log("made by rishabh ");
    return a+b;
}
// this is a arrow function
const mul = (c , d) => c*d ;
let m = mul(10 , 20);
let mess = message(10,20);
console.log(mess);
console.log(m);
// here obj is an object which contains properties 
let obj = {
    name : "rishabh", // it is a property
    age : 23,
    email : "rishabh@gmail.com",
    getDetails : function(){
        console.log(`my name is ${obj.name} and my age is ${this.age} `);
    },
    //one of the ways to create a method 
    getEmail(){
        console.log(`this is my email ${this.email}`);
    }
};
console.log(obj.name);
console.log(obj['name']);// we can also get the same variable this way
obj.getDetails();
obj.getEmail();
// to access tag inside a tag just concat two queryselectors
let ele = document.querySelector("div").querySelector("h2");
console.log(ele);
let id = document.querySelector("#thisid");//and . is used for class
console.log(id);
let elem = document.querySelectorAll("p");
console.log(elem[1]);

let text = document.querySelector("div");
text.innerHTML += "<b> this is new text </b>";// this concats prev info with new info 
//text.innerHTML = "<b> instead of wow </b>"; // this removes prev info and put new info

let numbers = [2,8,3,4,12,5,20,6,7,8,9];
// filter is used to pick all the elements in the array that fits the condition
let evenNum = numbers.filter(num => {
    return num % 2 == 0;
});
console.log(evenNum);
//map is used to perform similar function or operation on every element of the number
let sqNum = numbers.map(num => num * num );
console.log(sqNum , numbers);
//reduce is used to find the number of element in array are satisfying the condition
let red = numbers.reduce((counter,current) => {
    if(current % 2 == 0 ){
        counter++;
    }
    return counter;
}, 0 );
console.log(red);
//find is used to find one element only which satisfies the condition
let fin = numbers.find(num => num < 4);
console.log(fin);
//sorting for strings is case sensitive
numbers.sort((a,b)=> {
    if (a > b) {
        return 1;
    } else if(a < b){
        return -1;
    } else {
        return 0;
    }
});
console.log(numbers);
//optimized way to sort and to reverse we use reverse method
numbers.sort((a,b) => a - b).reverse();
console.log(numbers);

let chain = ["rishabh" , "raju" , "sharad" , "abhay" , "zach"];
// This is called array method chaining
let stu =  chain.filter(s => s != "zach")
                .map(s => s.toUpperCase())
                .sort()
                .reverse();
console.log(stu);
numbers.forEach(num => console.log(`this is ${num}`));