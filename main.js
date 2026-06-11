// Write your code below
function hasAvailableSeats(passengers) {
    if (passengers.length < 4) {
        return true;
    } else {
        return false;
    }
}



//You can test your function using this array:
var passengers = ["Jessica", "Kevin", "Louisa", "Patricia"];
console.log(hasAvailableSeats(passengers));