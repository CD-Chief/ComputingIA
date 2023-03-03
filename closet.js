function randInt(max) {
    return Math.floor(Math.random() * max);
}

function enoughClothes(clothingArr){
    for (i = 0; i <= 2; i++){
        if (clothingArr[i].length == 0){
            if(i == 0){
                console.log("Not enough tops")
                return "tops"
            }else if(i == 1){
                console.log("Not enough bottoms")
                return "bottoms"
            }else if(i == 2){
                console.log("Not enough Shoes")
                return "shoes"
            }else{
                console.log("Error with enough clothes function")
            }
            return false;
        }
    }
    return true;
}

function recommend(criteria, clothingArr){
    let tempType = enoughClothes(clothingArr);
    if (tempType){
        console.log("Reccomend Buying " + criteria + " " + tempType + "s");
    }
}

class Closet{
    constructor(Owner){
        this.Owner = Owner;
        this.tops = []
        this.bottoms = []
        this.shoes = []
        this.Storage = [this.tops,this.bottoms,this.shoes];
    }

    //Add clothing that already exists
    addClothing(Clothing){
        if (Clothing.type === "top"){
            this.tops.push(Clothing);   
        }else if (Clothing.type === "bottom"){
            this.bottoms.push(Clothing);
        }else if (Clothing.type === "shoe"){
            this.shoes.push(Clothing);
        }else{
            console.log("Invalid Type, Could not add clothing")
        }
    }

    //Create new clothing and add it
    addNewClothing(name, type, colour, occasion, warmth){
        this.addClothing(new Clothes(name, type, colour, occasion, warmth))
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






    //Complimentary filter
    colourFilterComplimentary(clothingArr){
        if (!enoughClothes(clothingArr)){
            console.log("cannot perform filter");
            return;
        }
        let tempArr = [
            [], //Tops
            [], //Bottoms
            [], // Shoes
        ];
        let temp = randInt(3);
        let temp2 = randInt(clothingArr[temp].length);
        let mainClothing = clothingArr[temp][temp2];

        let firstColour = mainClothing.colour.hue;
        let secondColour = mainClothing.colour.hue + 180;
        mainClothing.colour.fixHue();

        for(let i = 0; i <= 2; i++){
            for (let t = 0; t <= clothingArr[i].length - 1; t++){
                console.log(t)
                //uses function to check whether the current clothing colour is imilar to any of the required colours
                if (clothingArr[i][t].colour.hueInRange(firstColour) || clothingArr[i][t].colour.hueInRange(secondColour) ){ //need way to express black and white
                    console.log(clothingArr[i][t].name);
                    tempArr[i].push(clothingArr[i][t]);
                }
            }
        }
        if (!enoughClothes(tempArr)){
            recommend(firstColour, tempArr);
        }else{
            return tempArr;
        }
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
        let temp;
        for(let i = 0; i <= 2; i++){
            temp = randInt(this.Storage[i].length)
            for (let t = 0; t <= clothingArr[i].length - 1; t++){
                if(i == temp){
                    
                }
            }
        }
    }
    
}