//! TEST OBJECT
const TestObject = {
	firstName: "Liara",
	lastName: "T'Soni",
	race: "Asari",
	age: 106,
	home: "Thessia",
	recruitable: true,
};

//! PARAMETERS
function Dog(name, color) {
	this.name = name; // Owned Property
	this.color = color;
}
Dog.prototype.numLegs = 4; // Prototype Property

//! CONSTRUCTOR FUNCTION
function Dog() {
	this.name = "Bob";
	this.color = "brown";
	this.numLegs = 4;
}

//! CONSTRUCT OBJECT
let constructObj = new Dog();

//! INSTANCE OF
//* Checks if an object was created with a constructor
constructObj instanceof Dog;

//! METHOD
let dog = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function () {
		return "This dog has " + dog.numLegs + " legs.";
	},
};

//! OWN PROPERTY
let ownPropObject = new TestObject();
let ownProps = [];
for (let property in ownPropObject) {
	if (ownPropObject.hasOwnProperty(property)) {
		ownProps.push(property);
	}
}

//! PROTOTYPE
//* Default value
Dog.prototype.numLegs = 4;

//! THIS
let dog = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function () {
		return "This dog has " + this.numLegs + " legs.";
	},
};
