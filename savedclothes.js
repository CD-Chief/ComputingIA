//[name, coverage, occasion, thickness]
//["", , [""], ],
const Jackets = [ 
    ["Cardigan", 7,["Casual"], 6],
    ["Winter Jacket", 9,["Casual"], 10],
    ["Blazer",6 , ["Fancy"],6 ],
    ["Barbour",8 , ["Casual", "Party"],7 ],
    ["Duster",7 , ["Casual", "Fancy"],6 ],
    ["Fleece",9 , ["Casual"], 8],
    ["Body Warmer",6 , ["Casual"],9 ],
    ["Bomber",8 , ["Casual"],7 ],
    ["Hoodie",8 , ["Casual", "Party"],7],
    ["Fur Coat",7 , ["Casual","Fancy"], 9]
];

const Shirts = [
    ["T-Shirt",6 ,["Casual", "Party"], 3],
    ["Sleevless",5 , ["Casual", "Party"], 4],
    ["Shirt",7 , ["Fancy"], 2],
    ["Y-neck",6 , ["Casual", "Party"], 4],
    ["Sweater",7 , ["Casual", "Party"], 7]
];

const Pants = [
    ["Slacks", 9,["Fancy"], 4],
    ["Straight",8 , ["Casual", "Fancy"], 6],
    ["Leggings",9 , ["Casual", "Party"], 3],
    ["Jeans",8 , ["Casual", "Party"], 5],
    ["Short",4 , ["Casual", "Party"], 4],
    ["Sweat",9 , ["Casual"], 6]
];

const Skirts = [
    ["Mini",3 ,["Party"], 4],
    ["A-line",5 , ["Casual"], 7],
    ["Pencil",6 , ["Fancy", "Party"], 4],
    ["Draped",7 , ["Fancy"], 4],
    ["Mermaid",9 , ["Fancy"], 6]
];

const Dresses = [
    ["Wrap", 4,["Fancy", "Party"], 6],
    ["A-line",5 , ["Party","Fancy"], 6],
    ["Tent",7 , ["Casual"], 4],
    ["Sun",7 , ["Casual", "Party"], 4],
    ["Shirt",8 , ["Casual", "Formal", "Party"], 3]
];

const Shoes = [
    ["Boots", 8, ["Casual", "Party"], 8],
    ["Sneaker",5 , ["Casual", "Party"], 6],
    ["Running",5 , ["Casual"], 6],
    ["Ankle Boot",7 , ["Party", "Fancy", "Formal"], 7],
    ["Knee high",10 , ["Party", "Fancy"], 7]
];

const allCLothes = [Jackets, Shirts, Pants, Skirts, Dresses, Shoes];

//Function to count all clothes
//Could not make loop for this function as .length property of arrays does 
//not work when getting lentgh from an array inside an array array[array].length
function countAllClothes(){
    let count = 0;
    count += Jackets.length;
    count += Shirts.length;
    count += Pants.length;
    count += Skirts.length;
    count += Dresses.length;
    count += Shoes.length;
    return count;
}

//Function to return amount of clothes in type specified
//Had to make this function becasue the .length property of arrays does 
//not work when getting lentgh from an array inside an array array[array].length
function countClothes(type){
    switch (type){
        case "Jackets":
            return Jackets.length;
            break;
        case "Shirts":
            return Shirts.length;
            break;
        case "Pants":
            return Pants.length;
            break;
        case "Skirts":
            return Skirts.length;
            break;
        case "Dresses":
            return Dresses.length;
            break;
        case "Shoes":
            return Shoes.length;
            break;
        default:
            //Returns false if type is not found
            return false;
    }
}

//Function which finds the specified clothing's location in the array

//Tried to make this function with two for loops where one would loop through all the different
//Clothing type arrays and the other would be inside this one and loop through the different clothing inside these arrays
// and check if the naem the user gave the clothing matches any of the ones in the ones in the arrays. For unknown reasons
// this did not work
function findMatch(clothing, type){
    let tempNum;
    switch (type){
        case "Jackets":
            tempNum = 0;
            break;
        case "Shirts":
            tempNum = 1;
            break;
        case "Pants":
            tempNum = 2;
            break;
        case "Skirts":
            tempNum = 3;
            break;
        case "Dresses":
            tempNum = 4;
            break;
        case "Shoes":
            tempNum = 5;
            break;
        default:
            console.log("Error, Could not find type");
            return false;
            //Returns false and output error if type is not found (should not happen
        }

    // Checks if and of the clothing arrays contains the clothing and returns their location through an array
    //if not found, returns false
    for (let i = allCLothes[tempNum].length - 1 ; i >= 0 ; i-- ){
        if (allCLothes[tempNum][i][0] == clothing){
            return (tempArr = [tempNum, i]);
        }
    }
    return false;
}
