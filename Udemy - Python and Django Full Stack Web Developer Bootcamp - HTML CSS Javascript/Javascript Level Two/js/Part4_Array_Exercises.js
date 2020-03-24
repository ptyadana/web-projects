// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(name){
    roster.push(name);
}



// REMOVE STUDENT
// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
function remove(name){
    var index = roster.indexOf(name);

    if(index >= 0){
        roster.splice(index,1);
    }
}



// DISPLAY ROSTER
// Create a function called display that prints out the orster to the console.
function display(){
    console.log(roster)
}


// Start by asking if they want to use the web app
var useProgram = prompt("Welcome to Student Roster. Please type Yes to enter !")

if(useProgram === "Yes"){
    // Now create a while loop that keeps asking for an action (add,remove, display or quit)
    // Use if and else if statements to execute the correct function for each command.
    var choice = prompt("What would you like to do? Please choose any of these commands (add,remove,display,quit)")
    
    while(choice !== "quit"){

        if(choice === "add"){
            var studentName = prompt("Please enter Student Name you wish to add.")
            addNew(studentName)
        }else if(choice === "remove"){
            var studentName = prompt("Please enter Student Name you wish to remove.")
            remove(studentName)
        }else if(choice === "display"){
            display()
        }

        choice = prompt("What would you like to do? Please choose any of these commands (add,remove,display,quit)")
    }

    alert("Bye. Thanks for using Student Roster program.")
}
