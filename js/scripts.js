//JavaScript

//PizzaOrder object:
function PizzaOrder(quantity, toppings, pizzaSize) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

//Topping object:
function Topping(toppingName, price) {
  this.toppingName = toppingName;
  this.price = price;
}
