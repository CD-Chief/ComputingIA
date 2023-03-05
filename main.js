let chief =  new Closet("Chief");

chief.addNewClothing("green shirt", "top", new Colour(180), "formal", 5)
chief.addNewClothing("shirt", "top", new Colour(120), "formal", 4)
chief.addNewClothing("shirt2", "top", new Colour(20), "party",2 )
chief.addNewClothing("shirt3", "top", new Colour(360), "party", 10 )
chief.addNewClothing("shirt4", "top", new Colour(200), "fancy", 2 )
chief.addNewClothing("shirt5", "top", new Colour(0), "fancy", 6 )
chief.addNewClothing("shirt6", "top", new Colour(2), "casual", 8 )

chief.addNewClothing("green pants", "bottom", new Colour(300), "casual", 6)
chief.addNewClothing("pant", "bottom", new Colour(180), "party", 8 )
chief.addNewClothing("pant2", "bottom", new Colour(200), "party", 2)
chief.addNewClothing("pant3", "bottom", new Colour(354), "fancy", 10)
chief.addNewClothing("pant4", "bottom", new Colour(120), "formal", 0)
chief.addNewClothing("pant5", "bottom", new Colour(260), "party", 4 )
chief.addNewClothing("pant6", "bottom", new Colour(241), "formal", 5 )

chief.addNewClothing("green shoes", "shoe", new Colour(180), "formal", 3)
chief.addNewClothing("shoes", "shoe", new Colour(46), "casual", 4 )
chief.addNewClothing("green shoes2", "shoe", new Colour(225), "party", 7)
chief.addNewClothing("shoes2", "shoe", new Colour(35), "fancy", 9)
chief.addNewClothing("shoes3", "shoe", new Colour(296), "formal", 3)
chief.addNewClothing("shoes4", "shoe", new Colour(100), "party", 0)
chief.addNewClothing("shoes5", "shoe", new Colour(316), "casual", 1)
chief.addNewClothing("shoes6", "shoe", new Colour(275), "fancy", 7)




let start  = new Date();
let end = new Date();


lstart = Date.now();

end = Date.now();

let elapsed = end - start;

console.log(elapsed)