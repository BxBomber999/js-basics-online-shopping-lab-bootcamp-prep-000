var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1
  var itemName = item
  var object = {}
  object[itemName] = price
  cart.push(object)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
    var output = "In your cart, you have "
    switch(cart.length){
      case 0: console.log("Your shopping cart is empty."); break;
      case 1:
        var objKey = Object.keys(cart[0])[0]
        var objVal = cart[0][objKey]
      console.log(output + `${objKey} at $${objVal}.`); break;
      case 2:
        var objKey1 = Object.keys(cart[0])[0]
        var objVal1 = cart[0][objKey1]
        var objKey2 = Object.keys(cart[1])[0]
        var objVal2 = cart[1][objKey2]
        console.log(output + `${objKey1} at $${objVal1} and ${objKey2} at $${objVal2}.`); break;
      default:
        for(var i=0;i<cart.length;i++){
          var objKey = Object.keys(cart[i])[0]
          var objVal = cart[i][objKey]
          if(i < cart.length-1){
            output += `${objKey} at $${objVal}, `
          } else {
            output += `and ${objKey} at $${objVal}.`
          }
        }
        console.log(output); break;

    }
}

function total() {
  var total = 0
  for(i=0;i<cart.length;i++){
    var objKey = Object.keys(cart[0])[0]
    total += cart[0][objKey]
  }
  return total
}

function removeFromCart(item) {
  var newCart = []
  for(var j = 0; j < cart.length; j++){
    var key = Object.keys(cart[i])[0]
    if(key !== item){
      newCart.push(cart[i])
    }
  }
  if(cart === newCart){
    console.log("That item is not in your cart.")
    return cart
  } else {
    return newCart
  }
}

function placeOrder(cardNumber) {
  if(cardNumber){
    console.console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}`);
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}

addToCart("bananas")
viewCart()
addToCart("apples")
viewCart()
addToCart("soup")
viewCart()
