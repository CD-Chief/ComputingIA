
//makes sure hue is not above 360 or below 0
function fixHue(hue){
    if(hue < 0){
        return hue += 360;
    }else if (this.hue > 360){
        return hue -= 360;
    }else{
        return hue;
    }
}


//Class for clothing
class Clothes{

    constructor(name, type, hue, occasion, warmth){
        this.name = name;         //string
        this.type = type;         //string 
        this.hue = hue;           //int from 0 - 360
        this.occasion = occasion; // occasion the clothing can be used in
        this.warmth = warmth;     //Value out of 10
    }

    hueInRange(inpHue){
        inpHue = fixHue(inpHue);
        if ((this.hue >= inpHue - 15) && (this.hue <= inpHue + 15)){

            return true;
        }else{
            return false;
        }
    }

    showAttributes(){
        console.log("Name: " + this.name + " │type: " + this.type + " │Colour: " + this.hue + " │Coverage: " + this.coverage + " │Occasion: " + this.occasion);
    }



} 
