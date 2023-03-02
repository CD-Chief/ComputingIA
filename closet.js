function randInt(max) {
    return Math.floor(Math.random() * max);
}

class Closet{
    constructor(Owner){
        this.Owner = Owner;
        this.tops = []
        this.bottoms = []
        this.shoes = []
        this.Storage = [tops,bottoms,shoes];

    }
    //Add clothing that already exists
    addClothing(Clothing){
        if (Clothing.type == "top"){
            this.tops.push(Clothing);   
        }else if (Clothing.type == "bottom"){
            this.bottoms.push(Clothing);
        }else if (Clothing.type == "shoes"){
            this.shoes.push(Clothing);
        }else{
            console.log("Invalid Type, Could not add clothing")
        }
    }

    //Create new clothing and add it
    addNewClothing(name, type, colour, occasion, warmth){
        addClothing(this.Storage.push(new Clothes(name, type, colour, occasion, warmth)))
    }

    //with index or actual object??
    showAttributes(type,Index){
        if (this.Storage[Index]){
            let temp = this.Storage[Index];
            console.log("Name: " + temp.name + " │type: " + temp.type + " │Colour: " + temp.colour.name1 + " + " + temp.colour.name2 + " │Coverage: " + temp.coverage + " │Occasion: " + temp.occasion);
        }
    }
    showAll(){
        for (let i = 0; i <= this.Storage.length - 1 ; i++){
            this.showAttributes(i);
        }
    }




    // CREATING OUTFITS SECTION

    //Two rows so that the second row shows which colour is directly opposite of that of the first
    //may not need this
    colourWheel = [
        ["YG","Y","YO","O","RO","R","RP","P","BP","B","BG","G"],
        ["RP","P","BP","B","BG","G","YG","Y","YO","O","RO","R"]
    ]


    //Filters filter out the peices of clothing that would not fit,
    //And return the correct pieces of clothing in an array that can be passed into another filter or into constructOutfit

    //function that checks whther you have at least 1 piece of clothing for each type
    enoughClothes(){
        for (i = 0; i <= 2; i++){
            if (this.Storage[i].length == 0){
                if(i == 0){
                    console.log("Not enough tops")
                }else if(i == 1){
                    console.log("Not enough bottoms")
                }else if(i == 2){
                    console.log("Not enough Shoes")
                }else{
                    console.log("Error with enough clothes func")
                }
                return false;
            }
        }
        return true;
    }

    //Complimentary filter (fix)
    colourFilterComplimentary(clothingArr){
        if (!this.enoughClothes){
    
            retur
        }

        let tempArr = [
            [], //Tops
            [], //Bottoms
            [], // Shoes
        ];
        let verifies = 0;
        for (let i = 0; i <= 6 ; i++ ){
            if (this.Storage[i][0].length == 0){
                verifies += 1;
            }
        }
        let temp = randInt(verifies);
        for (let i = 0; i <= 6 ; i++ ){
            if (this.Storage[i][0].length != 0){
                temp -=1;
                if (temp == i){
                    let mainPiece = this.Storage[i][randInt(this.Storage[i].length)]
                }
            }
        }
        let firstColour = mainPiece.colour.hue;
        let secondColour = mainPiece.colour.hue + 180;
        mainPiece.colour.fixHue();

        for(let i = 0; i <= 6; i++){
            if (this.Storage[i][0].length != 0){
                for(let i = 0; i <= 6 ; i++ ){
                    
                }
            }//complete loop to loop around storage and check if empty or not 
        }
        return; 
    }

    colourFilterAnalogous(clothingArr){
        return;
    }

    colourFilterTriadic(clothingArr){
        return;
    }
    colourFilterSplitComplimentary(clothingArr){
        return;
    }

    weatherFilter(clothingArr, tempCel){
    }

    occasionFilter(clothingArr, Occasions){
    }


    //creates an outfit by randomly choosing clothing from given array
    constructOutfit(clothingArr){
    }
    
}