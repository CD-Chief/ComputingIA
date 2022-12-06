//CLass to create objects which store hexadecimal, name and brightness of colour


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
        if (this.Hue1 == null){
            //Code to turn colour name in to hue
            let temp = this.name1;
            let temp2;
            switch(temp){
                case "R":
                    temp2 = 0
                    break;
                case "RO":
                    temp2 = 30
                    break;
                case "O":
                    temp2 = 60
                    break;
                case "YO":
                    temp2 = 90
                    break;
                case "Y":
                    temp2 = 120
                    break;
                case "YG":
                    temp2 = 150
                    break;
                case "G":
                    temp2 = 180
                    break;
                case "BG":
                    temp2 = 210
                    break;
                case "B":
                    temp2 = 240
                    break;
                case "BP":
                    temp2 = 270
                    break;
                case "P":
                    temp2 = 300
                    break;
                case "RP":
                    temp2 = 330
                    break;
            }
        }else if(this.name1 = null){
            //Code to turn hue into colour name
        }else{
            console.log("Failed Configuration of Colour 1")
        }

        //For Second colour
        if (this.Hue2 == null){
            //Code to turn colour name in to hue
        }else if(this.name2 = null){
            //Code to turn hue into colour name
        }else{
            console.log("Failed Configuration of Colour 2")
        }
    }
}