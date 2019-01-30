let calculations = require("./operations")


    function printCalculation(operator, calculate) {
        console.log("420 " + operator + " 7 = " + calculate(420, 7));
    }



printCalculation('+',calculations.sum);
printCalculation('-',calculations.difference);
printCalculation('*',calculations.product);
printCalculation('/',calculations.quotient);