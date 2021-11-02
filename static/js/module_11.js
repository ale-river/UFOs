function addition(a, b) {
    return a + b;
  }
  
  function doubleAddition(a, b) {
    var total = addition(a, b) * 2;
    return total;
  }
  
  console.log(doubleAddition(2,2))
  // Result "198" in Console

  clear()
  // Clear Console


// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }

// Arrow Function or Fat Function
printHello = () => "Hello there!";


// ANOTHER EXAMPLE:
// Simple JavaScript log statement
function addition(a, b) {
    return a + b;
  }

// Converted to an arrow function
addition = (a, b) => a + b;


//Print List Comprehension
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
// Function for loop
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }
 // Print result
 console.log(listLoop(friends))


 // ForEach function which loops through the array in the same way as a for loop.
 let numbers = [1,2,3,4,5,6];
numbers.forEach(function(element) {
    console.log(element**2);
})

// For loop through with forEach => working with array
data.forEach((dataRow)=> {

});

// For Loop reference one object from the array
Object.values(dataRow).forEach((val) => {
});

// if-statement syntax
if ( condition ) { code to execute }

// pseudocode practice
if (a date is entered) {
  Filter the default data to show only the date entered
};