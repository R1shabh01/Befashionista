const url = "https://jsonplaceholder.typicode.com/todos/1";
const displayData = (callback) => {
    let request = new XMLHttpRequest();
    request.open("GET" , "https://jsonplaceholder.typicode.com/todos/1");
    request.send();
    request.addEventListener("readystatechange",() =>{
        if(request.readyState == 4 && request.status == 200){
            console.log(request.responseText);
            callback();
        }
    });
};
// this is the callback function
displayData(()=>{
    console.log("done");
});

const Data = (callback) => {
    let request = new XMLHttpRequest();
    request.open("GET" , "https://jsonplaceholder.typicode.com/todos/1111323");
    request.send();
    request.addEventListener("readystatechange",() =>{
        if(request.readyState == 4 && request.status == 200){
            callback(undefined , request.responseText);
        }else if(request.readyState == 4){
            callback("error while calling the API" , undefined );
        }
    });
};
// another way of using the callback function
Data((err , data) => {
    if(err){
        console.log(`An error occurred : ${err} `);
    }else{
        console.log(data);
    }
});
// promise consists of 3 states resolve , reject and pending
const Demo = () =>{
    return new Promise((resolve , reject) =>{
        resolve("hey this is promise resolve ");
        reject("hey this is promise reject "); // once the reject is called then the application will stop handling it again
    });
};
function onResolve(data){
    document.querySelector("div").innerHTML += "<p><b>this is on resolve</b></p>";
    console.log(data);
}
function onReject(error){
    console.error(error);
}
Demo().then(
    (data) =>{
        console.log(data);
    },(err) =>{
        console.log(err);
    });
// another way to show the promise
Demo().then(
    (data) => {
        console.log(`output 2 : ${data} `);
}).catch(
    (err) => {
        console.error(`error 2 : ${err} `);
});
//another way to show promise
Demo().then(onResolve)
      .then(onReject)
      .finally(() => console.log(" it will always execute at the end "));

// in order to use await you need to use async 
// and we can only assign promise value to a variable if their is a await  
async function gettingData(){
    const response = await fetch(url);
    console.log(response);
    const d = await response.json();
    console.log(d);
}
gettingData();

