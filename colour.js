//CLass to create objects which store hexadecimal, name and brightness of colour
class Colour{
    constructor(colourHex1, colourName1, colourHex2, colourName2, brightness){
        //For the two dominant colours in each piece of clothing
        this.hex1 = colourHex1;
        this.name1 = colourName1;

        this.hex2 = colourHex2;
        this.name2 = colourName2;

        this.brightness = brightness;
    }

    //If one of the parameters is null, it is filled by converting the other value into its type
    configure(){
        //First colour
        if (this.hex1 == null){
            //Code to turn colour name in to hex
        }else if(this.name1 = null){
            //Code to turn hex into colour name
        }else{
            console.log("Failed Configuration of Colour 1")
        }

        //For Second colour
        if (this.hex2 == null){
            //Code to turn colour name in to hex
        }else if(this.name2 = null){
            //Code to turn hex into colour name
        }else{
            console.log("Failed Configuration of Colour 2")
        }
    }
}