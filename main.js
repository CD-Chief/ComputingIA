let whatever = new Clothes("Cardigan", "Jackets", "ourr3gu", "ornvr", "obnfuf2", "ornorr", "ojrnon")
let Chief = new User("wdhid", "isnwvww", "pinrv3r");


Chief.addCloset();
Chief.closet.addClothing(whatever);
Chief.closet.addNewClothing("Cardigan", "Jackets", "rgwr", "egrt4t", null, 5);
Chief.closet.Storage[0].attributes();
Chief.closet.Storage[1].attributes();

console.log(Chief.closet.Storage[0].coverage);
console.log(Chief.closet.Storage[1].coverage);

Chief.closet.showAll();