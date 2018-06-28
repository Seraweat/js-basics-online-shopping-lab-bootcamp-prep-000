var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.random() * Math.floor(100)
  var cartObj = {itemName: item,
             itemPrice: price};
    cart.push(cartObj);

  return item + " has been added to your cart."
}

function viewCart() {
  var cartStr = []
  if (getCart().length < 1) {
    return "Your shopping cart is empty."
  } else
  for (var i = 0; i <= getCart().length; i++);
  cartStr += "In your cart, you have " + getCart()[i].itemName + " at" + " $" + getCart()[i].itemPrice + ", ";

  return cartStr;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
