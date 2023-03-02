
const typeNum = {
    "jacket" : 0, "shirt" : 1, "pants" : 2, "skirt" : 3, "shoe" : 4, "dress" : 5
}

class Closet{
    constructor(Owner){
        this.Owner = Owner;
        this.Storage = [
            [], //Jackets
            [], //Shirts
            [], // Pants
            [], // Skirts
            [], //Shoes
            [] //Dresses
        ];

    }
    //Add clothing that already exists
    addClothing(Clothing){
        if (Clothing.type == "jacket"){
            this.Storage[0].push(Clothing);   
        }else if (Clothing.type == "shirt"){
            this.Storage[1].push(Clothing);
        }else if (Clothing.type == "pants"){
            this.Storage[2].push(Clothing);
        }else if (Clothing.type == "skirt"){
            this.Storage[3].push(Clothing);
        }else if (Clothing.type == "shoe"){
            this.Storage[4].push(Clothing);
        }else if (Clothing.type == "dress"){
            this.Storage[5].push(Clothing);
        }
    }

    //Create new clothing and add it
    addNewClothing(clothing, type, colour, coverage, occasion){
        addClothing(this.Storage.push(new Clothes(clothing, type, colour, coverage, occasion)))
    }

    showAttributes( type,Index){
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


    //Filters filter out thr peices of clothing that would not fit,
    //And return the correct pieces of clothing in an array that can be passed into another filter or into constructOUtfit
    //Create outfit with colour theory
    colourFilterComplimentary(clothingArr){
        let tempArr = [
            [], //Jackets
            [], //Shirts
            [], // Pants
            [], // Skirts
            [], //Shoes
            [] //Dresses
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