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
    addNewClothing(clothing, type, colour1, colour2, coverage, occasion){
        this.Storage.push(new Clothes(clothing, type, colour1, colour2, coverage, occasion));
    }

    showAttributes(Index){
        if (this.Storage[Index]){
            let temp = this.Storage[Index];
            console.log("Name: " + temp.name + " │type: " + temp.type + " │Colour: " + temp.colour1 + " + " + temp.colour2 + " │Coverage: " + temp.coverage + " │Occasion: " + temp.occasion);
        }
    }

    showAll(){
        for (let i = 0; i <= this.Storage.length - 1 ; i++){
            this.showAttributes(i);
        }
    }

    //Each of these functions have to include not creating older outfits
    //Create outfit with colour theory
    colourTheory(colour, technique){
        //technique mening complimentary, analogous etc...
        //would return 
        return;
    }

    //Create outfit with Weather in consideration
    
}