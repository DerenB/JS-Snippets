//! DOM: Document Object Model
//* Document Object contains all of the html

//! ADJACENT ELEMENT, INSERT
const adjInsert = document.createElement('h2');
h2.append("I'm a h2");
const adjH2 = document.querySelector('h2');
h2.insertAdjacentElement('afterend', adjInsert);

//! APPEND
//* Can't use appendChild
//* Doesn't work on Internet Explorer
//* Can append multiple things
const p = document.querySelector('p');
p.append("New Content");
p.append("Uno","Dos");

//! CLASS APPLY
const classApply = document.querySelector('h2');
classApply.setAttribute('class', 'className');

//! CLASS LIST
classApply.classList.add('purple');
classApply.classList.remove('blue');
classApply.classList.contains('purple');
classApply.classList.toggle('green');

//! CREATE ELEMENT
const newImg = document.createElement('img');   //Assigns new element to variable
newImg.src = 'image.html';  //Adds the source to the image
document.body.appendChild(newImg);  //Adds the image to the end of the body

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

//! ONCLICK
const btn = document.querySelector('#v2');
btn.onclick = function() {
    console.log("Button clicked");
}

//! PREPEND
//* Opposite of Append
document.prepend("I'm at the start.");

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

//! RELATIONS, CHILD
const firstBold = document.querySelector('b');
firstBold.children[0];

//! RELATIONS, SIBLING
//* Gives the previous/next node
firstBold.previousSibling;
firstBold.nextSibling;

//* Gives the previous/next element
firstBold.previousElementSibling;
firstBold.nextElementSibling;

//! RELATIONS, PARENT ELEMENT
firstBold.parentElement;

//! TEXT, CONTENT
//* Retrieves the text from the markup
//* Retrieves everything including hidden elements
document.querySelector('p').textContent;

//! TEXT, INNER
//* Retrieves the inner text of an element
//* Will not retrieve hidden elements
document.querySelector('p').innerText;







