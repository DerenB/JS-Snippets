//! TEST OBJECT
const testObject = {
	firstName: "Liara",
	lastName: "T'Soni",
	race: "Asari",
	age: 106,
	home: "Thessia",
	recruitable: true,
};

//! CONSTRUCTOR FUNCTION
function Dog() {
	this.name = "Bob";
	this.color = "brown";
	this.numLegs = 4;
}

//! CONSTRUCT OBJECT
let constructObj = new Dog();

//! METHOD
let dog = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function () {
		return "This dog has " + dog.numLegs + " legs.";
	},
};

//! PARAMETERS
function Dog(name, color) {
	this.name = name;
	this.color = color;
	this.numLegs = 4;
}

//! THIS
let dog = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function () {
		return "This dog has " + this.numLegs + " legs.";
	},
};
