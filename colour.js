//CLass to create objects which store hexadecimal, name and brightness of colour

//Dictionary ofr converting from colour name to hue in degree
const ColHue = {
    "R" : 0, "RO" : 30, "O" : 60, "YO" : 90, "Y" : 120, "YG" : 150, "G" : 180, "BG" : 210, "B" : 240, "BG" : 270, "P" : 300
}

class Colour{
    constructor(Hue1, colourName1, Hue2, colourName2, brightness){
        //For the two dominant colours in each piece of clothing
        this.Hue1 = Hue1;
        this.name1 = colourName1;

        this.Hue2 = Hue2;
        this.name2 = colourName2;

        this.brightness = brightness;
    }

    //If one of the parameters is null, it is filled by converting the other value into its type
    configure(){
        //First colour
        if (this.Hue1 === null){
            //Code to turn colour name in to hue using dictionary
            this.Hue1 = ColHue[this.name1];
        }else if(this.name1 == null){
            //Code to turn hue into colour name
            Object.keys(ColHue).find(key => ColHue[key] === this.Hue1)
        }else{
            console.log("Failed Configuration of Colour 1")
        }

        //For Second colour
        if (this.Hue2 === null){
            //Code to turn colour name in to hue using dictionary
            this.Hue2 = ColHue[this.name2]
        }else if(this.name2 = null){
            //Code to turn hue into colour name
        }else{
            console.log("Failed Configuration of Colour 2")
        }
    }
}