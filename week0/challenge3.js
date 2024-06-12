const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height:1.69,
    calcBMI: function (){
        this.BMI = this.weight / (this.height ** 2)
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    weight: 92,
    height:1.95,
    calcBMI: function (){
        this.BMI = this.weight / (this.height ** 2)
        return this.BMI;
    }
}

mark.calcBMI();
john.calcBMI();

console.log (mark.BMI, john.BMI)
if (mark.BMI > john.BMI){
    console.log (`${mark.fullName}'s BMI (${mark.BMI}) is hiher than ${john.fullName}'s BMI (${john.BMI})`)
}

else if (john.BMI > mark.BMI){
    console.log (`${john.fullName}'s BMI (${john.BMI}) is hiher than ${mark.fullName}'s BMI (${mark.BMI})`)
}
else
console.log("they have equal BMI")