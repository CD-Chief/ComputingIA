//Colour function
function colourTheory(colour, technique){
    //technique mening complimentary, analogous etc...
    //would return 
    return;
}

//Class to create different clothes
class Clothes{
    Colour1 = null;
    Colour2 = null;

    constructor(name, lightness, occasion){
        this.name = name;
        //lighness is supposed to mean how suitable the clothing is for how weather, i.e less material, thinner fabric
        this.lightness = lightness;
        //occasion literally refers to the occasion it is to be used in, i.e formal, fancy, casual etc
        this.occasion = occasion;
    }

    addClothing(Array, clothing, colour1, colour2){

    }

} 

//Inheritance to make different types of clothes
class Jacket extends Clothes{
    type = "jacket";
}

class Tshirt extends Clothes{
    type = "tshirt";
}

class Pants extends Clothes{
    type = "pants";
}

class Shoes extends Clothes{
    type = "shoes";
}

let winterJacket = new Jacket("Winter Jacket", 0, "Casual");
