//Type of comments 
//! This is an alert
// TODO: This is a todo
// * Information highlighted
// ? Question comment
// Regular comment

//Capitalize First Letter
//* Capitalizes the first letter of a string
function capitalize(line) {
    let first = line.chatAt(0).toUpperCase();
    let newStr = first + line.substring(1,line.length);
    return newStr;
}