
user = new Closet();

user.addNewClothing("green shirt", "top", (180), "formal", 5)
user.addNewClothing("shirt", "top", (120), "formal", 4)
user.addNewClothing("shirt2", "top", (20), "party",2 )
user.addNewClothing("shirt3", "top", (360), "party", 10 )
user.addNewClothing("shirt4", "top", (200), "fancy", 2 )
user.addNewClothing("shirt5", "top", (0), "fancy", 6 )
user.addNewClothing("shirt6", "top", (2), "casual", 8 )

user.addNewClothing("green pants", "bottom", (300), "casual", 6)
user.addNewClothing("pant", "bottom", (180), "party", 8 )
user.addNewClothing("pant2", "bottom", (200), "party", 2)
user.addNewClothing("pant3", "bottom", (354), "fancy", 10)
user.addNewClothing("pant4", "bottom", (120), "formal", 0)
user.addNewClothing("pant5", "bottom", (260), "party", 4 )
user.addNewClothing("pant6", "bottom", (241), "formal", 5 )

user.addNewClothing("green shoes", "shoe", (180), "formal", 3)
user.addNewClothing("shoes", "shoe", (46), "casual", 4 )
user.addNewClothing("green shoes2", "shoe", (225), "party", 7)
user.addNewClothing("shoes2", "shoe", (35), "fancy", 9)
user.addNewClothing("shoes3", "shoe", (296), "formal", 3)
user.addNewClothing("shoes4", "shoe", (100), "party", 0)
user.addNewClothing("shoes5", "shoe", (316), "casual", 1)
user.addNewClothing("shoes6", "shoe", (275), "fancy", 7)

user.Storage = [user.tops,user.bottoms,user.shoes];

function clearByClass(elementClass){
    document.getElementsByClassName(elementClass).innerHTML = "";
}

function clearByID(elementID){
    document.getElementById(elementID).innerHTML = "";
}

function addClothingHT(){
    user.addNewClothing(document.getElementById("input-name").value,
    document.getElementById("input-type").value,
    document.getElementById("input-hue").value,
    document.getElementById("input-occasion").value,
    document.getElementById("input-warmth").value
    )
}

function showClothing(){
    clearByID("data-clothing")
    clearByID("data-outfits")
    let dataPage = document.getElementById("data-clothing");
    let temp;

    let clothingH2 = document.createElement("h2");
    let clothingText = document.createTextNode("Clothing");
    clothingH2.appendChild(clothingText);
    dataPage.appendChild(clothingH2);

    temp = user.tops;
    for (t = 0; t <= temp.length - 1 ; t++){
        let current = temp[t];
        let line = document.createElement("hr");
        let para = document.createElement("p");
        let text = document.createTextNode(current.name + " -  type : " + current.type + " / hue : " + current.hue + " / occasion : " + current.occasion + " / warmth : " + current.warmth)
        para.appendChild(text);
        dataPage.appendChild(para);
        dataPage.appendChild(line);
    }

    temp = user.bottoms;
    for (t = 0; t <= temp.length - 1 ; t++){
        let current = temp[t];
        let line = document.createElement("hr");
        let para = document.createElement("p");
        let text = document.createTextNode(current.name + " -  type : " + current.type + " / hue : " + current.hue + " / occasion : " + current.occasion + " / warmth : " + current.warmth)
        para.appendChild(text);
        dataPage.appendChild(para);
        dataPage.appendChild(line);
    }

    temp = user.shoes;
    for (t = 0; t <= temp.length - 1 ; t++){
        let current = temp[t];
        let line = document.createElement("hr");
        let para = document.createElement("p");
        let text = document.createTextNode(current.name + " -  type : " + current.type + " / hue : " + current.hue + " / occasion : " + current.occasion + " / warmth : " + current.warmth)
        para.appendChild(text);
        dataPage.appendChild(para);
        dataPage.appendChild(line);
    }


}

function weather(){
    let temp = user.weatherFilter(user.Storage, document.getElementById("input-temp").value)
    if (temp){
        displayOutfit(temp);
    }
}

function showOutfits(){
    clearByID("data-clothing")
    clearByID("data-outfits")
    let dataPage = document.getElementById("data-outfits");
    let temp;

    let outfitH2 = document.createElement("h2");
    let outfitText = document.createTextNode("Outfits");
    outfitH2.appendChild(outfitText);
    dataPage.appendChild(outfitH2);


    for(t = 0; t <= user.Outfits.length - 1 ; t++){
        let current = user.Outfits[t];
        let line = document.createElement("hr");
        let para = document.createElement("p");
        let text = document.createTextNode(" Top: " + current.top + " Bottom: " + current.bottom + " Shoe: " + current.shoe);
        para.appendChild(text);
        dataPage.appendChild(para);
        dataPage.appendChild(line);
    }

}

function displayOutfit(Outfit){
    current = Outfit;
    let dataPage = document.getElementById("outfit");
    let para = document.createElement("p");
    let text = document.createTextNode(" Top: " + current.top + " Bottom: " + current.bottom + " Shoe: " + current.shoe);
    para.appendChild(text);
    dataPage.appendChild(para);
}