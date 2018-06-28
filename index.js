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
  if (cart.length < 1) {
    return "Your shopping cart is empty."
  } else
  for (var i = 0; i < cart.length; i++){
  cartStr += cart[i].itemName + " at" + " $" + cart[i].itemPrice + ", ";
}
  cartStr = cartStr.slice(0, cartStr.length-2) + "."
  return "In your cart, you have " + cartStr;
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
