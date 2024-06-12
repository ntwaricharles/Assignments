const calcAverage = (a, b, c) => a + b + c / 3

const avgDolphins = calcAverage(54, 7, 24);
const avgKoalas = calcAverage(98, 95, 59);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas*2)
        console.log(`Dolphins wins(${avgDolphins} vs. ${avgKoalas})`)
    
    else if (avgKoalas > avgDolphins*2)
        console.log(`Koalas wins(${avgDolphins} vs. ${avgKoalas})`)

    else
        console.log('None wins')
}

checkWinner(avgDolphins, avgKoalas)
