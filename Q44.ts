// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Step 1: Define the type for the sandwich items array
type SandwichItems = string[];

// Step 2: Create the orderSandwich function
function orderSandwich(...items: SandwichItems): void {
  console.log("Sandwich Order:");
  if (items.length === 0) {
    console.log("No items selected. Please choose some items for your sandwich.");
  } else {
    console.log("Items: " + items.join(", "));
  }
  console.log("-------------------------");
}

// Step 3: Call the function with different numbers of arguments
orderSandwich("Cheese ", "Chicken Patty", "Mayo");
orderSandwich("Turkey", "Russian", "Club");
orderSandwich(); // Calling with no arguments
