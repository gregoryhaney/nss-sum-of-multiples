
// find the sum of all the multiples of 3 or 5 below 1000
const sumOfMultiples = () => {

// iterate through integers 1 through 999
        let sumOfThrees = 0
        let modulusCheckerThrees = 0
        let sumOfFives = 0
        let modulusCheckFives = 0
    for (let integer = 1; integer < 1000; integer ++) {

    // on each integer, divide it by 3 and check for modulus of zero
        // if modulus is zero, add the integer value to 
        // the running sum variable for three
                modulusCheckerThrees = parseInt(integer % 3)
                    if (modulusCheckerThrees > 0) {               
                    }
                   else {
                    sumOfThrees += integer
                    }            
                        /*
                        on each integer, divide it by 5 and check modulus
                        if modulus is zero, add the integer value to
                        the running sum variable for five
                        */    
                modulusCheckerFives = parseInt(integer % 5)
                    if (modulusCheckerFives > 0) {
                    }
                   else {
                    sumOfFives += integer
                    }            
            }
            console.log(sumOfFives + " is the Grand Sum of the Fives!")
            console.log(sumOfThrees + " is the Grand Sum of the threes!")
                // add the running sum variables of three and five together
                // console.log that total
            console.log("The sum of all 3 & 5 multiples is: " + (sumOfFives + sumOfThrees))
}

sumOfMultiples()