
//Default constructor
class Fish {
    constructor(name,image,price,location,shadowSize,timeStartOne,timeEndOne,timeStartTwo,timeEndTwo,
        monthStartOne,monthEndOne,monthStartTwo,monthEndTwo) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.location = location;
        this.shadowSize = shadowSize;
        this.timeStartOne = timeStartOne;
        this.timeEndOne = timeEndOne;
        this.timeStartTwo = timeStartTwo;
        this.timeEndTwo = timeEndTwo;
        this.monthStartOne = monthStartOne;
        this.monthEndOne = monthEndOne;
        this.monthStartTwo = monthStartTwo;
        this.monthEndTwo = monthEndTwo;
    }
}

let fishList = [];

// Creating the fish array items
let bitterling = new Fish("Bitterling","bitterling.png",900,"River",1,0,2359,-1,-1,11,03,-1,-1);
let paleChub = new Fish("Pale Chub","palechub.png",200,"River",1,0900,1600,-1,-1,1,12,-1,-1);
let crucianCarp = new Fish("Crucian Carp","cruciancarp.png",160,"River",2,0,2359,-1,-1,1,12,-1,-1);
let dace = new Fish("Dace","dace.png",240,"River",3,1600,900,-1,-1,1,12,-1,-1);
let carp = new Fish("Carp,","carp.png",300,"Pond",4,0,2359,-1,-1,1,12,-1,-1);
let koi = new Fish("Koi","koi.png",4000,"Pond",4,1600,900,-1,-1,1,12,-1,-1);
let goldfish = new Fish("Goldfish","goldfish.png",1300,"Pond",1,0,2359,-1,-1,1,12,-1,-1);
let popEyedGoldfish = new Fish("Pop-Eyed Goldfish","popeyedgoldfish.png",1300,"Pond",1,900,1600,-1,-1,1,12);
let rachuGoldfish = new Fish("Ranchu Goldfish","ranchugoldfish.png",4500,"Pond",2,900,1600,-1,-1,1,12,-1,-1);
let killifish = new Fish("Killifish","killifish.png",300,"Pond",1,2359,-1,-1,4,8,-1,-1);
let crawfish = new Fish("Crawfish","crawfish.png",200,"Pond",2,0,2359,-1,-1,4,9,-1,-1);

fishList.push(bitterling);
fishList.push(paleChub);
fishList.push(crucianCarp);

for(let i = 0; i < fishList.length; i++) {
    console.log(fishList[i].name + ", " + fishList[i].price + ".");
}
