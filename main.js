let chief =  new Closet("Chief");



chief.addNewClothing("green shirt", "top", new Colour(180))
chief.addNewClothing("shirt", "top", new Colour(360))
chief.addNewClothing("shirt", "top", new Colour(200))

chief.addNewClothing("green pants", "bottom", new Colour(180))
chief.addNewClothing("green shoes", "shoe", new Colour(180))


let compArr = chief.colourFilterComplimentary(chief.Storage);

console.log(compArr)
