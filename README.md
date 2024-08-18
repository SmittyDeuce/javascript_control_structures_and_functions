# javascript_control_structures_and_functions
# Online Shopping Simulation

## Overview

This project simulates a simple online shopping experience using JavaScript. The program allows users to:

1. Log in to the system.
2. Browse a list of available products.
3. Add products to their cart.
4. Calculate the total cost of items in their cart.

## Functionality

### Task 1: User Login

The user is prompted to log in before accessing the shopping features. The system will:

- Display a prompt asking if the user wants to log in.
- Proceed if the user enters 'Y' (yes).
- Cancel the login if the user enters 'N' (no).
- Re-prompt the user in case of invalid input.

### Task 2: Adding Items to Cart

The program displays a list of available products and allows the user to:

- Choose products from three categories: fruits, meats, and dairy items.
- Enter 'y' to add an item to the cart or 'n' to skip.
- Retry if the input is invalid.

The categories and their products are:

- **Fruits:**
  - Apple
  - Banana
  - Orange
  - Grapes
  - Strawberry

- **Meats:**
  - Chicken
  - Beef
  - Pork
  - Lamb
  - Turkey

- **Dairy:**
  - Milk
  - Cheese
  - Yogurt
  - Butter
  - Cream

### Task 3: Calculate Total Cost

After adding items to the cart, the program calculates:

- The total cost of items in the cart.
- Uses predefined prices for each item.
- Displays the total cost rounded to the nearest whole number.

## Code Structure

- **Function `logged_in()`:** Handles user login and input validation.
- **Function `add_to_cart(...arrays)`:** Manages adding items to the cart based on user input.
- **Function `total_cost(cart)`:** Computes and displays the total cost of the items in the cart.

## How to Run

1. Open your browser’s Developer Tools
2. Navigate to the Console tab.
3. Copy and paste the JavaScript code into the console and press Enter to execute.
   or open the console and refresh and watch it go line by line

## Expected Outcomes

- Understanding how to use conditional statements for controlling program flow.
- Implementing loops for repetitive tasks with arrays.
- Gaining practical experience in solving real-world problems using JavaScript control structures.

