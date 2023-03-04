//Class to create different clothes
class Clothes{

    constructor(name, type, colour, occasion, warmth){
        this.name = name; //string
        this.type = type; //string 
        this.colour = colour; //object
        this.occasion = occasion; // occasion the clothing can be used in
        this.warmth = warmth; //Value out of 10
    }

    showAttributes(){
        console.log("Name: " + this.name + " │type: " + this.type + " │Colour: " + this.colour.hue + " │Coverage: " + this.coverage + " │Occasion: " + this.occasion);
    }

} 
