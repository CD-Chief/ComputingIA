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

    constructor(name, type, colour1, colour2, lightness, occasion){
        this.name = name;
        this.type = type;
        this.colour1 = colour1;
        this.colour2 = colour2;
        this.lightness = lightness;
        this.occasion = occasion;
    }

    //if clothing aligns with what is in the data then assign pre determined values for lightness and occasion
    switch (this,type) {
        case "jacket":
            if (Jackets.includes(this.name)){
                let temp = Jackets.find(this.name);
                this.lightness = Jackets[temp][1];
                this.occasion = Jackets[temp][2];
            }
            break;

        case "top":
            if (Tops.includes(this.name)){
                let temp = Tops.find(this.name);
                this.lightness = Tops[temp][1];
                this.occasion = Tops[temp][2];
            }
            break;

        case "pants":
            if (Pants.includes(this.name)){
                let temp = Pants.find(this.name);
                this.lightness = Pants[temp][1];
                this.occasion = Pants[temp][2];
            }
            break;

        case "shoes":
            if (Shoes.includes(this.name)){
                let temp = Shoes.find(this.name);
                this.lightness = Shoes[temp][1];
                this.occasion = Shoes[temp][2];
            }
            break;

        default:
            break;
    }
} 

