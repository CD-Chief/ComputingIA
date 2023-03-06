function randInt(max) {
    return Math.floor(Math.random() * max);
}

function enoughClothes(clothingArr){
    for (i = 0; i <= 2; i++){
        if (clothingArr == false){
            return false;
        }
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

//need to adapt function to different filters (colour, weather, occasion)
function recommend(type ,criteria, clothingArr){
    let tempType = enoughClothes(clothingArr);
    if (tempType){
        console.log("Recommend Buying " + type + " " + criteria + " " + tempType);
    }
}

class Closet{
    constructor(){
        this.tops = []
        this.bottoms = []
        this.shoes = []
        this.Storage = [this.tops,this.bottoms,this.shoes];
        this.Outfits = []
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
        this.Storage = [this.tops,this.bottoms,this.shoes];
    }

    saveOutfit(index){
        if (this.recentOutfits[index]){
            this.savedOutfits.push(this.recentOutfits[index])
        }else{
            console.log("Invalid index")
        }
        
    }


    // CREATING OUTFITS SECTION

    //Filters filter out the peices of clothing that would not fit,
    //And return the correct pieces of clothing in an array that can be passed into another filter or into constructOutfit

    //function that checks whther you have at least 1 piece of clothing for each type


    
    colourFilterComplimentary(clothingArr){

        //check whether there are enough clothes
        if (enoughClothes(clothingArr) != true){
            console.log("cannot perform filter");
            return false;
        }

        //array to store clothes after
        let tempArr = [
            [], //Tops
            [], //Bottoms
            [], // Shoes
        ];

        //Choosing random piece of clothing
        let index1 = randInt(3);
        let index2 = randInt(clothingArr[index1].length);
        let mainClothing = clothingArr[index1][index2];

        //finding required colours
        let firstColour = mainClothing.hue;
        firstColour = fixHue(firstColour);
        let secondColour = mainClothing.hue + 180;
        secondColour = fixHue(secondColour);
        

        //looping through clothes and adding clothes with correct colour
        for(let i = 0; i <= 2; i++){
            for (let t = 0; t <= clothingArr[i].length - 1; t++){
                //uses function to check whether the current clothing colour is imilar to any of the required colours
                if (clothingArr[i][t].hueInRange(firstColour) || clothingArr[i][t].hueInRange(secondColour) ){ //need way to express black and white
                    tempArr[i].push(clothingArr[i][t]);
                }
            }
        }

        //check if clothes left over are enough, if not recommend a piece of clothing
        if (enoughClothes(tempArr) != true){
            recommend("colour", secondColour, tempArr);
            return false;
        }else{
            return tempArr;
        }
    }


    colourFilterAnalogous(clothingArr){

        //check whether there are enough clothes
        if (enoughClothes(clothingArr) != true){
            console.log("cannot perform filter");
            return false;
        }

        //array to store clothes after
        let tempArr = [
            [], //Tops
            [], //Bottoms
            [], // Shoes
        ];

        //Choosing random piece of clothing
        let index1 = randInt(3);
        let index2 = randInt(clothingArr[index1].length);
        let mainClothing = clothingArr[index1][index2];

        //finding required colours
        let firstColour = mainClothing.hue;
        firstColour = fixHue(firstColour);
        let secondColour = firstColour - 30;
        secondColour = fixHue(secondColour);
        let thirdColour = firstColour + 30;
        thirdColour = fixHue(thirdColour);

        //looping through clothes and adding clothes with correct colour
        for(let i = 0; i <= 2; i++){
            for (let t = 0; t <= clothingArr[i].length - 1; t++){
                //uses function to check whether the current clothing colour is imilar to any of the required colours
                if (clothingArr[i][t].hueInRange(firstColour) || clothingArr[i][t].hueInRange(secondColour) || clothingArr[i][t].hueInRange(thirdColour)){ //need way to express black and white
                    tempArr[i].push(clothingArr[i][t]);
                }
            }
        }

        //check if clothes left over are enough, if not recommend a piece of clothing
        if (enoughClothes(tempArr) != true){
            recommend("colour", secondColour, tempArr);
            return false;
        }else{
            return tempArr;
        }

    }

    colourFilterTriadic(clothingArr){

        //check whether there are enough clothes
        if (enoughClothes(clothingArr) != true){
            console.log("cannot perform filter");
            return false;
        }

        //array to store clothes after
        let tempArr = [
            [], //Tops
            [], //Bottoms
            [], // Shoes
        ];

        //Choosing random piece of clothing
        let index1 = randInt(3);
        let index2 = randInt(clothingArr[index1].length);
        let mainClothing = clothingArr[index1][index2];

        //finding required colours
        let firstColour = mainClothing.hue;
        firstColour = fixHue(firstColour);
        let secondColour = firstColour - 120;
        secondColour = fixHue(secondColour);
        let thirdColour = firstColour + 120;
        thirdColour = fixHue(thirdColour);

        //looping through clothes and adding clothes with correct colour
        for(let i = 0; i <= 2; i++){
            for (let t = 0; t <= clothingArr[i].length - 1; t++){
                //uses function to check whether the current clothing colour is imilar to any of the required colours
                if (clothingArr[i][t].hueInRange(firstColour) || clothingArr[i][t].hueInRange(secondColour) || clothingArr[i][t].hueInRange(thirdColour)){ //need way to express black and white
                    tempArr[i].push(clothingArr[i][t]);
                }
            }
        }

        //check if clothes left over are enough, if not recommend a piece of clothing
        if (enoughClothes(tempArr) != true){
            recommend("colour", secondColour, tempArr);
            return false;
        }else{
            return tempArr;
        }
    }

    colourFilterSplitComplimentary(clothingArr){

        //check whether there are enough clothes
        if (enoughClothes(clothingArr) != true){
            console.log("cannot perform filter");
            return false;
        }

        //array to store clothes after
        let tempArr = [
            [], //Tops
            [], //Bottoms
            [], // Shoes
        ];

        //Choosing random piece of clothing
        let index1 = randInt(3);
        let index2 = randInt(clothingArr[index1].length);
        let mainClothing = clothingArr[index1][index2];

        //finding required colours
        let firstColour = mainClothing.hue;
        firstColour = fixHue(firstColour);
        let secondColour = firstColour - 160;
        secondColour = fixHue(secondColour);
        let thirdColour = firstColour + 160;
        thirdColour = fixHue(thirdColour);

        //looping through clothes and adding clothes with correct colour
        for(let i = 0; i <= 2; i++){
            for (let t = 0; t <= clothingArr[i].length - 1; t++){
                //uses function to check whether the current clothing colour is imilar to any of the required colours
                if (clothingArr[i][t].hueInRange(firstColour) || clothingArr[i][t].hueInRange(secondColour) || clothingArr[i][t].hueInRange(thirdColour)){ //need way to express black and white
                    tempArr[i].push(clothingArr[i][t]);
                }
            }
        }

        //check if clothes left over are enough, if not recommend a piece of clothing
        if (enoughClothes(tempArr) != true){
            recommend("colour", secondColour, tempArr);
            return false;
        }else{
            return tempArr;
        }
    }


    weatherFilter(clothingArr, tempCel){

        //check whether there are enough clothes
        if (enoughClothes(clothingArr) != true){
            console.log("cannot perform filter");
            return false;
        }

        //array to store clothes after
        let tempArr = [
            [], //Tops
            [], //Bottoms
            [], // Shoes
        ];

        let requiredWarmth = (10 -(tempCel/4))

        //looping through clothes and adding clothes with similar warmth
        for(let i = 0; i <= 2; i++){
            for (let t = 0; t <= clothingArr[i].length - 1; t++){
                if (clothingArr[i][t].warmth <= requiredWarmth + 1 && clothingArr[i][t].warmth >= requiredWarmth - 1){
                    tempArr[i].push(clothingArr[i][t]);
                }
            }
        }

        //check if clothes left over are enough, if not recommend a piece of clothing
        if (enoughClothes(tempArr) != true){
            recommend("warmth",requiredWarmth, tempArr);
            return false;
        }else{
            return tempArr;
        }

    }

    occasionFilter(clothingArr, Occasions){
        
        //check whether there are enough clothes
        if (enoughClothes(clothingArr) != true){
            console.log("cannot perform filter");
            return false;
        }

        //array to store clothes after
        let tempArr = [
            [], //Tops
            [], //Bottoms
            [], // Shoes
        ];


        for(let i = 0; i <= 2; i++){
            for (let t = 0; t <= clothingArr[i].length - 1; t++){
                if (Occasions.includes(clothingArr[i][t].occasion)){
                     tempArr[i].push(clothingArr[i][t]);
                    break;
                 }
            }
        }

        if (enoughClothes(tempArr) != true){
            recommend("",Occasions[0], tempArr);
            return false;
        }else{
            return tempArr;
        }
    }

    //creates an outfit by randomly choosing clothing from given array
    constructOutfit(clothingArr){

        //check whether there are enough clothes
        if (enoughClothes(clothingArr) != true){
            console.log("cannot construct");
            return false;
        }

        //create outfit object to edit and return
        let tempOutfit = new Outfit();
        let temp;

        //loop through clothing
        for(let i = 0; i <= 2; i++){

            //used to compare to index and choose random piece of lcothing
            temp = randInt(clothingArr[i].length)
            for (let t = 0; t <= clothingArr[i].length ; t++){
                if(t == temp){
                    tempOutfit.fullOutfit[i] = clothingArr[i][t];
                }
            }
        }
        this.Outfits.push(tempOutfit)
        return tempOutfit;
    }
}