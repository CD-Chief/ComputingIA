class Closet{
    constructor(Owner){
        this.Owner = Owner;
        this.Storage = [];
    }
    //Add clothing that already exists
    addClothing(Clothing){
        this.Storage.push(Clothing);
    }
    //Create new clothing and add it
    addNewClothing(clothing, type, colour, coverage, occasion){
        this.Storage.push(new Clothes(clothing, type, colour, coverage, occasion));
    }

    
    showAttributes(Index){
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
    colourWheel = [
        ["YG","Y","YO","O","RO","R","RP","P","BP","B","BG","G"],
        ["RP","P","BP","B","BG","G","YG","Y","YO","O","RO","R"]
    ]


    //Each of these functions have to include not creating older outfits
    //Create outfit with colour theory
    colourOutfit(colour, technique){
        //technique meaning complimentary, analogous etc...
        //would return array of pices of clothing 
        return;
    }

    //Create outfit with Weather in consideration
    weatherOutfit(tempCel){
        //would return array of pices of clothing 
    }
    
}