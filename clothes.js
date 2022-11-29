//Class to create different clothes
class Clothes{

    constructor(name, type, colour, coverage, occasion, thickness){
        this.name = name;
        this.type = type;
        this.colour = colour;
        this.coverage = coverage;
        this.occasion = occasion;
        this.thickness = thickness;
    }

    //if clothing aligns with what is in the data then assign pre determined values for coverage and occasion
    attributes(){
        let tempArr = findMatch(this.name,this.type);
        if (tempArr != false){
            //tempArr contains the clothing from the database that shares the name of the clothing being created
            let firstIterate = tempArr[0];
            let secondIterate = tempArr[1];

            if (this.coverage == null){
                this.coverage = allCLothes[firstIterate][secondIterate][1];
            }
            if (this.occasion == null){
                this.occasion = allCLothes[firstIterate][secondIterate][2];
            }
            if (this.thickness == null){
                this.thickness = allCLothes[firstIterate][secondIterate][3];
            }
        }
    }
} 
