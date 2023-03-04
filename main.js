let chief =  new Closet("Chief");


console.log(3/4);

chief.addNewClothing("green shirt", "top", new Colour(180), "office")
chief.addNewClothing("shirt", "top", new Colour(360), "party")
chief.addNewClothing("shirt", "top", new Colour(200))

chief.addNewClothing("green pants", "bottom", new Colour(300))
chief.addNewClothing("green shoes", "shoe", new Colour(180))
chief.addNewClothing("green shoes2", "shoe", new Colour(225))



let compArr = chief.colourFilterSplitComplimentary(chief.Storage);

console.log(compArr)
