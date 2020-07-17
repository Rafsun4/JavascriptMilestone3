

//feetToMile
//return a warning if the value is negative

function feetToMile(feet) {
    if(feet < 0) {
        return ("please enter positive value");
    }
    var mile = feet / 5280;
    return mile              
}

var output = feetToMile(-500000);      
var output2 = feetToMile(1000000);  
console.log(output); 
console.log(output2);



//woodCalculator

function woodCalculator(chair, table, bed) {
    var chairTotal = chair * 1;
    var tableTotal = table * 3;
    var bedTotal   = bed   * 5;
    var woodTotal  = chairTotal + tableTotal + bedTotal;

    return woodTotal; 
}

var output = woodCalculator(2, 1, 1);
console.log("Total wood needed in qubicle inch is:", output);



// Brick-Calculator

function brickCalculator(numberOfFloors) {
    var firstTenFloors = 10;
    var numberOfBricks = 0;
    if (numberOfFloors > 20) {
        numberOfBricks = (firstTenFloors * 15 * 1000) + (firstTenFloors * 12 * 1000) + ((numberOfFloors - 20) * 10 * 1000);
    }
    else if (numberOfFloors > 10) {
        numberOfBricks = (firstTenFloors * 15 * 1000) + ((numberOfFloors - 10) * 12 * 1000);
    }
    else if(numberOfFloors > 0) {
        numberOfBricks = (numberOfFloors * 15 * 1000);
    }
    else {
        console.log("You can't put negative numbers");
    }
    return numberOfBricks;
}

var totalBricks = Math.abs(brickCalculator(1));
console.log("Total Bricks:", totalBricks);



//tinyFriend

function tinyFriend(names) {
    var shortString = names[0];

    for (var i = 1; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length < shortString.length && currentName != 0) {
            shortString = currentName;             //This won't take empty strings as output                         
        }
    }
    return shortString;
}

var shortStringNames = tinyFriend(['hasib', 'oni', '  ', 'rafsun', 'jian', 'rafi', 'nafis', 'aditto']);
console.log("Tiny name is:", shortStringNames);