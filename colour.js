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
    //
}

// HSV System
/**
 * @param  parameters hues: 0-360 / names: Letters / sat & val: 0 -100
 * ---
 */
class Colour{
    constructor(hue1, name1, sat1, val1,   hue2, name2, sat2, val2){
        //For the two dominant colours in each piece of clothing
        this.hue1 = hue1;
        this.name1 = name1;
        this.sat1 = sat1;
        this.val1 = val1;

        this.hue2 = hue2;
        this.name2 = name2;
        this.sat1 = sat2;
        this.val1 = val2;
    }

    //convert hue into name or name into hue
    //In order to prevent repeating of code and increase maintainability
    findNameFunc(hue, name, sat, val){
        if( (hue != null) && (0 <= hue <= 360) ){
            //traces hue back to their keys/names in dictionary
            return Object.keys(ColHue).find(colName => ColHue[colName] == hue);
        //Checks whether name is even valid, does not tell me it has failed if so
        }else if ( (name == null) || !(colourWheel1.includes(name)) ){
            return false;
        }  
    }

    findHueFunc(hue, name, sat, val){
        if ( (name != null ) && (colourWheel1.includes(name)) ){
            //Code to turn colour name in to hue using dictionary
            return ColHue[name];
        //Checks whether hue is even valid, does not tell me it has failed if so
        }else if( (hue == null) || !(0 <= hue <= 360)){
            return false;
        }
    }

    findName(){
        //first colour
        if ((this.findNameFunc(this.hue1,this.name1,this.sat1,this.val1)) != false){
            this.name1 = this.findNameFunc(this.hue1,this.name1,this.sat1,this.val1)
        }else{
            console.log("Failed config of name1")
        }
        
        //second colour
        if ((this.findNameFunc(this.hue2,this.name2,this.sat2,this.val2)) != false){
            this.name2 = this.findNameFunc(this.hue2,this.name2,this.sat2,this.val2)
        }else{
            console.log("Failed config of name2")
        }
    }
    
    findHue(){
        //First colour
        if ((this.findHueFunc(this.hue1,this.name1,this.sat1,this.val1)) != false){
            this.hue1 = this.findHueFunc(this.hue1,this.name1,this.sat1,this.val1)
        }else{
            console.log("Failed config of hue1")
        }

        //For Second colour
        if ((this.findHueFunc(this.hue2,this.name2,this.sat2,this.val2)) != false){
            this.hue2 = this.findHueFunc(this.hue2,this.name2,this.sat2,this.val2)
        }else{
            console.log("Failed config of hue2")
        }
    }

    findAll(){
        this.findName();
        this.findHue();
    }
}