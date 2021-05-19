//! DOM: Document Object Model
//* Document Object contains all of the html


//! GET ELEMENT BY ID
//* Looks for an element in the HTML with a certain ID
document.getElementById("ID");

//! GET ELEMENT BY TAG NAME
//* Tag name is not case sensitive
document.getElementsByTagName('h1');

//! GET ELEMENT BY CLASS NAME
document.getElementsByClassName("");

//! INNER HTML
//* Retrieves everything including tag names
//* Can be used to change html
document.querySelector('p').innerHTML;

//! QUERY SELECTOR
//* Can selection any CSS item by any style
//* Element name, ID, etc
//* Returns the first match when multiple elements of same type
document.querySelector('h1');
document.querySelector('.class');
document.querySelector('#Id');
document.querySelector('a[title="Java"]');

//! QUERY SELECTOR, ALL
//* Returns all of type instead of just first
document.querySelectorAll('p');
document.querySelectorAll('p a');

//! QUERY SELECTOR, ATTRIBUTES
const qSelectAttri = document.querySelector('a').title;
qSelectAttri.getAttribute('href');
qSelectAttri.setAttribute('href','https://www.google.com/');


//! TEXT, CONTENT
//* Retrieves the text from the markup
//* Retrieves everything including hidden elements
document.querySelector('p').textContent;

//! TEXT, INNER
//* Retrieves the inner text of an element
//* Will not retrieve hidden elements
document.querySelector('p').innerText;







