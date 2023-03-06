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

    wearOutfit() {
        const today = new Date().getTime();
        if (!this.dateWorn || today - this.dateWorn < 604800000) { // 604800000 ms = 7 days
          this.dateWorn = today;
          console.log("Outfit worn");
        } else {
          console.log("This outfit was worn too recently");
        }
    }
}