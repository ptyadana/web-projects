var myNewObj = {a:"hello",b:[1,2,3],c:{inside:["a","b"]}};
console.log(myNewObj)

//key a
console.log(myNewObj["a"])

//key b
console.log(myNewObj["b"])
//key b => 2
console.log(myNewObj["b"][1])

//key c
console.log(myNewObj["c"])
//key c => inside => b
console.log(myNewObj["c"]["inside"][1])

//Car object
carInfo = {make:"Tokyo", year: 2017, model: "Camry"}
console.log(carInfo["make"])

//get keys
for(key in carInfo){
    console.log(key);
}

//get values
for(key in carInfo){
    console.log(carInfo[key]);
}

//Objects and its function
//Object and this keyword
var myObj = {
    name : "Richard",
    myMethod: function(){
        console.log("myMethod was called.");
    },
    greeting: function(){
        //Object and this keyword
        console.log("Hello " + this.name);
    }
}

var my