// Define an fat arrow function that is called 'factorialNumber' and receives the parameter number
const factorialNumber = ( number ) => { 
    // Define factorial variable that is start in 1
    let factorial = 1; 
    // If number is strictly equal to 1 or number is strictly equal to 0
    if ( number === 1 || number === 0 ) {
    // Return the number 1 because the factorial to 1 and 0 is 1  
        return 1;
    } else { // Else if factorial is other number
        factorial = 1; // Start factorial in '1' para no have errors and that be a number positive
        for ( let i = 1; i <= number; i++ ) { // In each iteration 
            factorial *= i; // Multiply factorial for 1 
        }
        return factorial;
    }
};
console.log( factorialNumber( 10 ) );
