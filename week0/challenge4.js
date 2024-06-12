const calcTip = function (bill) {
    if (50 <= bill <= 300){
        console.log ("your tip amount is:", (bill * 15) / 100)
        return (bill * 15) / 100
    }
    
    else{
        console.log ("your tip amount is:", (bill * 20) / 100)
        return (bill * 20) / 100
    }
}

const bills = [22, 295, 176, 440,37, 105, 10,1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals)

const calcAverage = function(arr){
    let sum = 0;
    for (let i =0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log (calcAverage([10, 15, 30]));

console.log(calcAverage(totals));

console.log (calcAverage(tips));