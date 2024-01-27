/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryFound;
  let output = []; // This will be the final output.
  
  // "transactions" is a list of objects, each object having these components: { itemName, category, price, timestamp };
  // I need to collect "category" & "price" of each object.
  indexes1 = transactions.length;
  // Iterating over "transactions" array using indexes:
  for (let i = 0; i < indexes1; i++) {
    // For each object:
    // category -> transactions[i]["category"]
    // price -> transactions[i]["price"]

    // I need to see if this "category" already exists in "output";
    // To check in "output", I need to iterate over it.
    categoryFound = false;
    indexes2 = output.length;
    for (let j = 0; j < indexes2; j++) {
      if (transactions[i]["category"] == output[j]["category"]) {
        // "category" already exists in "output";
        // I need to update the "price" to sum of existing & new.
        output[j]["totalSpent"] = output[j]["totalSpent"] + transactions[i]["price"];
        categoryFound = true;
        break;
      }
    }
    
    if (categoryFound == false) {
      // "category" does NOT exist in "output";
      // Push this new object for new category found.
      output.push({
        category: transactions[i]["category"],
        totalSpent: transactions[i]["price"]
      })
    }
  }
  return output;
}
module.exports = calculateTotalSpentByCategory;
