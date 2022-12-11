//CLass to create objects which store hexadecimal, name and brightness of colour

//Dictionary ofr converting from colour name to hue in degree
const ColHue = {
    "R" : 0, "RO" : 30, "O" : 60, "YO" : 90, "Y" : 120, "YG" : 150, "G" : 180, "BG" : 210, "B" : 240, "BG" : 270, "P" : 300
}

// HSV System
class Colour{
    constructor(hue1, colourName1, hue2, colourName2, saturation, value){
        //For the two dominant colours in each piece of clothing
        this.hue1 = hue1;
        this.name1 = colourName1;

        this.hue2 = hue2;
        this.name2 = colourName2;

        this.saturation = saturation;
        this.value = value;
    }

    //If one of the parameters is null, it is filled by converting the other value into its type
    configure(){
        //First colour
        if (this.hue1 === null){
            //Code to turn colour name in to hue using dictionary
            this.hue1 = ColHue[this.name1];
        }else if(this.name1 == null){
            //Code to turn hue into colour name
            Object.keys(ColHue).find(key => ColHue[key] === this.hue1)
        }else{
            console.log("Failed Configuration of Colour 1")
        }

        //For Second colour
        if (this.hue2 === null){
            //Code to turn colour name in to hue using dictionary
            this.hue2 = ColHue[this.name2]
        }else if(this.name2 = null){
            //Code to turn hue into colour name
        }else{
            console.log("Failed Configuration of Colour 2")
        }
    }
}