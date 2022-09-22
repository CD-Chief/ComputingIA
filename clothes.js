//Colour function
function colourTheory(colour, technique){
    //technique mening complimentary, analogous etc...
    //would return 
    return;
}

//add clothes
function addClothing(Array, clothing, type, colour1, colour2, lightness, occasion){
    let newClothing = new Clothes(clothing, type, colour1, colour2, lightness, occasion)
    newClothing.attributes();
    Array.push(newClothing);
}

//Class to create different clothes
class Clothes{

    constructor(name, type, colour1, colour2, lightness, occasion, length){
        this.name = name;
        this.type = type;
        this.colour1 = colour1;
        this.colour2 = colour2;
        this.lightness = lightness;
        this.occasion = occasion;
        this.length = length;
    }

    //if clothing aligns with what is in the data then assign pre determined values for lightness and occasion
    attributes(clothing){
        let tempArr = findMatch(clothing);
        let firstIterate = tempArr[0];
        let secondIterate = tempArr[1];
        currentName = clothing.name;
        currentLightness = clothing.lightness;
        currentOccasion = clothing.occasion;
        currentLength = clothing.length;

        currentLightness = allCLothes[firstIterate][secondIterate][1];
        currentOccasion = allCLothes[firstIterate][secondIterate][2];
        currentLength = allCLothes[firstIterate][secondIterate][3];
    }
} 

