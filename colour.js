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
    P : 300,
    RP : 330
}

// HSV System
/**
 * @param  parameters hues: 0-360 / names: Letters / sat & val: 0 -100
 * ---
 */
class Colour{
    constructor(hue, colourName, saturation, value){
        //For the dominant colour in each piece of clothing
        this.hue = hue;
        this.name = colourName;
        this.saturation = saturation;
        this.value = value;
    }

    fixHue(){
        if(this.hue < 0){
            hue += 360;
        }else if (this.hue > 360){
            hue -= 360;
        }
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
            return true;
        }
    }

    findHueFunc(hue, name, sat, val){
        //if name is valid
        if ( (name != null ) && (colourWheel1.includes(name)) ){
            //Code to turn colour name in to hue using dictionary
            return ColHue[name];
        //Checks whether hue is not valid, if so it has failed
        }else if( (hue == null) || !(0 <= hue <= 360)){
            return false;
        //in this case, name is not valid but there already is valid a hue
        }else{
            return true;
        }
    }

    findName(){
        //first colour
        let temp = this.findNameFunc(this.hue1,this.name1,this.sat1,this.val1);
        if (temp != false && colourWheel1.includes(temp)){
            this.name1 = temp;
        }else if (temp == false){
            console.log("Failed config of name1")
        }
        
        //second colour
        temp = this.findNameFunc(this.hue2,this.name2,this.sat2,this.val2);
        if (temp != false && colourWheel1.includes(temp)){
            this.name2 = temp
        }else if (temp == false){
            console.log("Failed config of name2")
        }
    }
    
    findHue(){
        //First colour
        let temp = this.findHueFunc(this.hue1,this.name1,this.sat1,this.val1);
        //find out whether temp is neither true or false, javascript automatically converts 0 to false so further measures are taken
        if ((temp != false && temp != true) || temp == 0){
            this.hue1 = temp;
        }else if (temp == false){
            console.log("Failed config of hue1")
        }

        //For Second colour
        temp = this.findHueFunc(this.hue2,this.name2,this.sat2,this.val2);
        //find out whether temp is neither true or false, javascript automatically converts 0 to false so further measures are taken
        if ((temp != false && temp != true) || temp == 0 ){
            this.hue2 = temp;
        }else if (temp == false){
            console.log("Failed config of hue2")
        }
    }

    findAll(){
        this.findName();
        this.findHue();
    }
}