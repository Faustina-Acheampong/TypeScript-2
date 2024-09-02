
// Step 1: Turn this into an enum)
enum Categories {
    ELECTRONICS = 'Electronics',
    GROCERIES = 'Groceries',
    CLOTHING = 'Clothing'
};

// Step 2: Create a list of products (using plain objects)

interface Product {
    id: number;
    name: string;
    price: number;
    category: Categories;
};
const products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99, category: Categories.ELECTRONICS },
    { id: 2, name: 'T-Shirt', price: 19.99, category: Categories.CLOTHING },
    { id: 3, name: 'Bananas', price: 1.99, category: Categories.GROCERIES }
];

// Step 3: Create a shopping cart (initially empty)
let shoppingCart: Product[] = [];

// Step 4: Function to add a product to the cart (using arrow function)
const addToCart: (product: Product) => void = (product) => {
    shoppingCart.push(product);  // Pushes the product to the shoppingCart array
    console.log(`${product.name} has been added to your cart.`); // notification message
};

// Step 5: Function to calculate the total price of the cart (using arrow function)
const calculateTotal: (cart: Product[]) => string = (cart) => {
  let total = 0; //initial total price set to 0
  cart.forEach((item) => total += item.price * item.quantity); //forEach adds the price of the item multiplied by its quantity, to the total price
  return total.toFixed(2); // returns the total price as a string with two decimal places
};

// Step 6: Function to display the cart contents (using arrow function)
const displayCart: (cart) => void = (cart) => {
    // Checks if the cart is empty and logs a message as such
    if (cart.length === 0) {
        console.log('Your cart is empty.');
        return;
    }
    console.log('Your cart contains:');
    // repeat over each item in the cart
    cart.forEach((item) => {
        console.log(`- ${item.name} (${item.category}): $${item.price}`); // Logs the item's name, category, and price
    });
    console.log(`Total: $${calculateTotal(cart)}`);
};

// Step 7: Simulate adding products to the cart and displaying it
addToCart(products[0]); // Adding Laptop
addToCart(products[2]); // Adding Bananas
displayCart(shoppingCart);
