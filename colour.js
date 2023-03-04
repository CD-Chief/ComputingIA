
function fixHue(hue){
    if(hue < 0){
        return hue += 360;
    }else if (this.hue > 360){
        return hue -= 360;
    }else{
        return hue;
    }
}


//Dictionary for converting from colour name to hue in degree
const ColHue = {
    R : 0,
    RO : 30, 
    O : 60, 
    YO : 90, 
    Y : 120, 
    YG : 150, 
    G : 180, 
    BG : 210, 
    B : 240, 
    BG : 270, 
    P : 300,
    RP : 330
}

//Class to create objects which store hexadecimal, name and brightness of colour
// HSV System
class Colour{
    constructor(hue, rgb, saturation, value){
        //For the dominant colour in each piece of clothing
        this.hue = hue;
        this.rgb = rgb;
        this.saturation = saturation;
        this.value = value;
    }

    //Cheks whether the hue is in range of inpHue, the range being +- 15
    hueInRange(inpHue){
        inpHue = fixHue(inpHue);
        if ((this.hue >= inpHue - 15) && (this.hue <= inpHue + 15)){

            return true;
        }else{
            return false;
        }
    }

    //be able to convert an RGB value into hue
    findHue(){

    }

    isBlackWhite(){

    }

}