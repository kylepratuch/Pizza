//JavaScript

//Topping object:
function Topping(toppingName, price) {
  this.toppingName = toppingName;
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

//Pizza size determines base price -> add toppings -> multiply by quantity
PizzaOrder.prototype.calculatePrice = function() {
  var topping = new Topping;
  var orderCost = 0;
  if(this.pizzaSize === "small") {
    orderCost += 10;
  } else if(this.pizzaSize === "medium") {
    orderCost += 15;
  } else {
    orderCost += 20;
  }

  //Toppings are $1.00 each. Use for loop so changing price per topping is easier.
  if(this.toppings.length > 0) {
    for(var i = 1; i <= this.toppings.length; i++) {
      orderCost += 1;
    }
  }

  var finalPrice = orderCost * this.quantity;
  return finalPrice;
}

//jQuery
$(document).ready(function() {
  //Add additional divs for extra toppings:
  $("#add-topping").click(function() {
    $("#more-toppings").append('<div class="additional-topping">' +
                                '<div class="form-group">' +
                                  // '<label for="size">Toppings</label>' +
                                  '<select id="topping">' +
                                    '<option value="cheese">Extra cheese</option>' +
                                    '<option value="pepperoni">Pepperoni</option>' +
                                    '<option value="peppers">Peppers</option>' +
                                  '</select>' +
                                '</div>' +
                              '</div>');
  });

  $("form#order").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("select#size").val();
    var inputtedQuantity = $("input#quantity")
  });
});
