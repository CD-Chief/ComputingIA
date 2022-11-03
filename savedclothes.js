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
            false;
    }
}

//Function which finds the specified clothing's location in the array
function findMatch(clothing, type){
    count = countAllClothes();
    console.log(count);
    for (let i = 6 - 1 ; i >= 0 ; i--){
        for (let u = (countClothes(allCLothes[i]) - 1) ; u >= 0 ; u--){
            console.log(countClothes(allCLothes[i]));
            console.log(allCLothes[i][u][0]);
            if (clothing = allCLothes[i][u][0]){
                console.log("found");
                return (temp = [i,u]);
            }
        }
    }
    return false;
}