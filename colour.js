//CLass to create objects which store hexadecimal, name and brightness of colour

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
    P : 300
}

// HSV System
/**
 * @param  parameters hues: 0-360 / names: Letters / sat & val: 0 -100
 * ---
 */
class Colour{
    constructor(hue1, name1, hue2, name2, saturation, value){
        //For the two dominant colours in each piece of clothing
        this.hue1 = hue1;
        this.name1 = name1;

        this.hue2 = hue2;
        this.name2 = name2;

        this.saturation = saturation;
        this.value = value;
    }

    //convert hue into name or name into hue
    findName(){
        //traces hue back to their keys/names in dictionary
        if(this.hue1 == null){
            this.name1 = Object.keys(ColHue).find(colName => ColHue[colName] == this.hue1)
        }else{
            console.log("Failed name Configuration of Colour 1")
        }
        
        if (this.hue2 == null){
            this.name2 = Object.keys(ColHue).find(colName => ColHue[colName] == this.hue2)
        }else{
            console.log("Failed name Configuration of Colour 2")
        }
    }
    
    findHue(){
        //First colour
        if (this.hue1 === null){
            //Code to turn colour name in to hue using dictionary
            this.hue1 = ColHue[this.name1];
        }else{
            console.log("Failed Configuration of Colour 1")
        }

        //For Second colour
        if (this.hue2 === null){
            //Code to turn colour name in to hue using dictionary
            this.hue2 = ColHue[this.name2]
        }else{
            console.log("Failed Configuration of Colour 2")
        }
    }

    findAll(){
        this.findName
        this.findHue
    }
}