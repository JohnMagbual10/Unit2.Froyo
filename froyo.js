// Prompt the visitor for froyo flavors
var flavorsInput = prompt("Please enter your favorite froyo flavors, separated by commas (e.g., vanilla, vanilla, strawberry, coffee, coffee):");

// Check if the input is not null or empty
if (flavorsInput !== null && flavorsInput.trim() !== "") {
    // Split the input string into an array of flavors
    var flavorsArray = flavorsInput.split(",");

    // Create an empty object to store flavor counts
    var flavorCounts = {};

    // Loop through the flavorsArray to count occurrences using for...of loop
    for (var flavor of flavorsArray) {
        flavor = flavor.trim(); // Trim any leading/trailing spaces
        if (flavorCounts.hasOwnProperty(flavor)) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    }

    // Display the results in the console as a table
    console.table(flavorCounts);
} else {
    console.log("No input provided or canceled.");
}
