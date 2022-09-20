//Colour function
function colourTheory(colour, technique){
    //technique mening complimentary, analogous etc...
    //would return 
    return;
}

//add clothes
function addClothing(Array, clothing, type, colour1, colour2, lightness, occasion){
    Array.push(new Clothes(clothing, type, colour1, colour2, lightness, occasion));
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
    attributes(clothing,type){
        currentName = clothing.name;
        currentLightness = clothing.lightness;
        currentOccasion = clothing.occasion;
        currentLength = clothing.length;
    }
} 

