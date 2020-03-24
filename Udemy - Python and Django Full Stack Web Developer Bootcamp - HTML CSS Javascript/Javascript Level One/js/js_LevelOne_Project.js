firstName = prompt("Welcome! Please enter your First Name.")
lastName = prompt("Please enter your Last Name.")
age = prompt("Please enter your Age.")
height = prompt("Please enter your height in cm.")
petName = prompt("Please enter your Pet Name too.")

if(firstName[0] === lastName[0] && (age > 20 && age <30 ) 
    && height >= 170 && petName[petName.length-1] === "y"){
    console.log("Welcome to Spy world ! you have passed the test.");
}else{
    console.log("sorry.. nothing to see.")
}
