//Type of comments 
//! This is an alert
// TODO: This is a todo
// * Information highlighted
// ? Question comment
// Regular comment

//! CAPITALIZE THE FIRST LETTER 
//* Capitalizes the first letter of a string
function capitalize(line) {
    let first = line.chatAt(0).toUpperCase();
    let newStr = first + line.substring(1,line.length);
    return newStr;
}

//! LEAP YEAR
function leapYear() {
    let year = window.prompt("Enter a Year: ");
    if (year <= 1582) {
        alert("Has to be a year greater than 1582.")
    } else {
        if (year % 4 === 0) {
            if (year % 100 === 0 && year % 400 !== 0) {
                alert("Not a leap year.");
            } else {
                alert("That's a Bingo. It's a leap year.");
            }
        } else {
            alert("Not a leap year.");
        }
    }
}

