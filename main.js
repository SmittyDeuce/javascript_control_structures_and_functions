// Problem Statement: You are tasked with creating a JavaScript program
// that simulates a simple online shopping experience. The program should
// allow users to browse products, add them to a cart, and calculate the
// total cost of their purchase.

// Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.

function logged_in() {
    // Prompt the user to log in
    let log_in = prompt("Do you want to log in? (Y for yes N for No) ");

    // Check if the user wants to log in
    if (log_in.toUpperCase() === "Y") {
        console.log("Logging in..."); // Log the login message
    } 
    // Check if the user cancels the login
    else if (log_in.toLowerCase() === "n") {
        console.log("Login Canceled"); // Log the cancel message
        return null; // Exit the function if login is canceled
    } 
    // Handle invalid input
    else {
        console.log("Invalid Input"); // Log an error message
        logged_in(); // Re-prompt the user for input
    }
}

logged_in(); // Call the function to check if the user is logged in

// Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.

// Arrays holding different types of products
const fruitItems = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Strawberry"
];

const meatItems = [
    "Chicken",
    "Beef",
    "Pork",
    "Lamb",
    "Turkey"
];

const dairyItems = [
    "Milk",
    "Cheese",
    "Yogurt",
    "Butter",
    "Cream"
];

// Object holding prices for each product
const prices = {
    "Apple": 1.0,
    "Banana": 0.5,
    "Orange": 0.75,
    "Grapes": 2.0,
    "Strawberry": 1.5,
    "Chicken": 5.0,
    "Beef": 7.0,
    "Pork": 6.0,
    "Lamb": 8.0,
    "Turkey": 5.5,
    "Milk": 1.2,
    "Cheese": 2.5,
    "Yogurt": 1.0,
    "Butter": 1.8,
    "Cream": 2.0
};

// Function to add items to the cart
const add_to_cart = (...arrays) => {
    let cart = []; // Initialize an empty cart
    let all_items = arrays.flat(); // Flatten the arrays into a single list

    // Iterate over each item
    for (let i = 0; i < all_items.length; i++) {
        let ele = all_items[i]; // Get the current item
        console.log("ADD Item:", ele); // Log the item being processed

        // Prompt user to decide whether to add the item to the cart
        let add_item = prompt("Enter 'y' to add to cart 'n' to skip");

        // Check user's input
        if (add_item.toLowerCase() === "y") {
            cart.push(ele); // Add item to the cart
            console.log(`${ele} has been added to your cart`); // Log the addition
        } 
        else if (add_item.toLowerCase() === "n") {
            console.log(`${ele} has not been added to your cart`); // Log the skip
        } 
        else {
            console.log("Invalid input: please enter 'y' or 'n'"); // Log invalid input
            i--; // Retry the current item
        }
    }
    return cart; // Return the cart with selected items
}

let user_cart = add_to_cart(dairyItems, meatItems, fruitItems); // Call the function and store the cart
console.log("Your Cart:", user_cart); // Log the user's cart

// Task 3: Calculate the total cost of the items in the cart and display it to the user.

// Function to calculate and display the total cost
function total_cost(cart) {
    let total = 0; // Initialize total cost

    // Iterate over each item in the cart
    for (let item of cart) {
        total += prices[item] || 0; // Add item price to total, default to 0 if item not found
    }

    console.log("Total Cost: $", Math.round(total)); // Log the total cost rounded to the nearest whole number
}

total_cost(user_cart); // Call the function to calculate and display the total cost

// Expected Outcomes:
// - Understand how to use conditional statements to control program flow based on certain conditions.
// - Implement loops to iterate through arrays and perform repetitive tasks efficiently.
// - Gain practical experience in solving real-world problems using JavaScript control structures.
