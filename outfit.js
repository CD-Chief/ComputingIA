class Outfit{
    constructor(top,bottom,shoe){
        this.top = top;
        this.bottom = bottom;
        this.shoe = shoe;
        this.fullOutfit = [this.top,this.bottom,this.shoe];
        this.dateWorn = false;
    }

    showOutfit(){
        for (let i = 0; i <= 2; i++){
            console.log(this.fullOutfit[i].name)
        }
    }

    wear(){
        this.dateWorn = new Date().now
    }


}