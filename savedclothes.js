//[name, lightness, occasion, length]
const Jackets = [ 
    ["Cardigan", 4,"Casual", true],
    ["Winter Jacket", 0, "Casual", true]
];

const Shirts = [
    
];

const Pants = [
    
];

const Skirts = [
    
];

const Dresses = [
    
];

const Shoes = [
    
];

const allCLothes = [Jackets, Shirts, Pants, Skirts, Shoes, Dresses];

function countClothes(){
    let count = 0;
    for (let i = 0; i <= 6; i++){
        count += (allCLothes[i].length);
    }
    return count;
}

function findMatch(clothing){
    count = countClothes;
    for (let i = count ; i > -1 ; i--){
        for (let u = allCLothes[count].length ; u > -1 ; u--){
            if (clothing = allCLothes[i][u][0]){
                return (temp = [i,u]);
            }
        }
    }
    return false;
}