/ Prompt the user to input the Max Limit of Loops
let maxLimit = parseInt(prompt("3:"));

// Initialize a running sum variable
let runningSum = 0;

// Outer loop
for (let counter1 = 0; counter1 < maxLimit; counter1++) {
    // Inner loop
    for (let counter2 = 0; counter2 < maxLimit; counter2++) {
        // Calculate the sum of the current counter values
        let totalValue = counter1 + counter2;
        
        // Add this sum to the running total
        runningSum += totalValue;

        // Log the current loop points, sum of counters, and running total
        console.log(Loop Point: (Counter1: ${counter1}, Counter2: ${counter2}), 
                    + Sum of Counters: ${totalValue}, Running Total: ${runningSum});
    }
}