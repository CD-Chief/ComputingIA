const allClothes = { "allClothes" : [
    //Name, Lightness, Occasion, Length
    //{"name" : "", lightness : , length : , occasion ; "" , },
    {
    "Jackets":[
        {"name":"Cardigan", "lightness":3, "length":true, "occasion":"Casual"},
        {"name" :"Winter Jacket", lightness :0 , length :true, occasion :"Casual"}
    ],
    "Shirts":[
        {}
    ],
    "Pants":[
        {}
    ],
    "Skirt":[
        {}
    ],
    "Shoes":[
        {}
    ],
    "Dress":[
        {}
    ],
}
]
} 

var json = JSON.parse(allClothes);

console.log(json.Jackets[0].name);