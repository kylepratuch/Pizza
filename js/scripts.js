//JavaScript

//Topping object:
function Topping(toppingName, price) {
  this.toppingName = toppingName;
  this.price = price;
}

//PizzaOrder object:
function PizzaOrder(quantity, pizzaSize) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

PizzaOrder.prototype.addTopping = function() {
  var topping = new Topping;
  this.toppings.push(topping);
}

PizzaOrder.prototype.calculatePrice = function() {
  var sizePrices = [10, 15, 20];
}
