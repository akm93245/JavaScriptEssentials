let count = 0;

function increasecount() {
    count++;
}

function displaycount(){
    document.getElementById("displaycount").innerHTML=count;
}
function increasecount(){
    count++;
    displaycount();
}

//Defining variables and functions to show msg congrats
function checkCountValue(){
if (count == 10){
    window.alert("Congrats you have now 10 Followers");
}else if (count == 20){
    window.alert("Congrats you have now 20 Followers You are going bigger");
}}

function increasecount() {
  count++; // Increment the count by 1
  displaycount(); // Check count value and display messages
  checkCountValue();// Check count value and display messages
}