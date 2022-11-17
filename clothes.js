//Class to create different clothes
class Clothes{

    constructor(name, type, colour1, colour2, coverage, occasion, thickness){
        this.name = name;
        this.type = type;
        this.colour1 = colour1;
        this.colour2 = colour2;
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

            this.coverage = allCLothes[firstIterate][secondIterate][1];
            this.occasion = allCLothes[firstIterate][secondIterate][2];
            this.thickness = allCLothes[firstIterate][secondIterate][3];
        }
    }
} 
