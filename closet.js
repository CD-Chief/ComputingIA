class Closet{
    constructor(Owner){
        this.Owner = Owner;
        let Storage = [];
    }

    //Add clothing that already exists
    addClothing(Clothing){
        this.Storage.push(Clothing);
    }

    //Create new clothing and add it
    addNewClothing(clothing, type, colour1, colour2, lightness, occasion){
        this.Storage.push(new Clothes(clothing, type, colour1, colour2, lightness, occasion));
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