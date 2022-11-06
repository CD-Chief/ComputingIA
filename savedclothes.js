//[name, lightness, occasion, length]
const Jackets = [ 
    ["Cardigan", 4,"Casual", true],
    ["Winter Jacket", 0, "Casual", true]
];

const Shirts = [
    ["T-Shirt", 8,"Casual", false]
];

const Pants = [
    ["Dress Pants", 5,"Fancy", true]
];

const Skirts = [
    ["Mini", 6,"Party", false]
];

const Dresses = [
    ["Apron", 7,"Casual", null]
];

const Shoes = [
    ["Boots", 4, "Casual", true]
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
            console.log("found");
            return (tempArr = [tempNum, i]);
        }
    }
    return false;
}
