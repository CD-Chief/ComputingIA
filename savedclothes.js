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
    [""]
];

const allCLothes = [Jackets, Shirts, Pants, Skirts, Shoes, Dresses];

function countClothes(){
    let count = 0;
    count += Jackets.length;
    count += Shirts.length;
    count += Pants.length;
    count += Skirts.length;
    count += Dresses.length;
    count += Shoes.length;
    return count;
}

function findMatch(clothing){
    count = countClothes();
    console.log(count);
    for (let i = count ; i > -1 ; i--){
        for (let u = allCLothes[count].length ; u > -1 ; u--){
            if (clothing = allCLothes[i][u][0]){
                console.log("found")
                return (temp = [i,u]);
            }
        }
    }
    return false;
}