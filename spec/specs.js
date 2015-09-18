describe('Topping', function() {

  it("creates a topping with a name and price", function() {
    var testTopping = new Topping("cheese",1);
    expect(testTopping.toppingName).to.equal("cheese");
    expect(testTopping.price).to.equal(1);
  });
});

describe('PizzaOrder', function() {

  it("creates an order for a single pizza with no toppings", function() {
    var testPizzaOrder = new PizzaOrder(1,"small");
    expect(testPizzaOrder.quantity).to.equal(1);
    expect(testPizzaOrder.pizzaSize).to.equal("small");
    expect(testPizzaOrder.toppings).to.eql([]);
  });

  it("creates an order for a single pizza with one topping", function() {
    var testPizzaOrder = new PizzaOrder(1,"small");
    var testTopping = new Topping("cheese",1);
    testPizzaOrder.addTopping(testTopping);
    expect(testPizzaOrder.quantity).to.equal(1);
    expect(testPizzaOrder.pizzaSize).to.equal("small");
    expect(testPizzaOrder.toppings.length).to.equal(1);
  });

  it("creates an order for a single pizza with multiple toppings", function() {
    var testPizzaOrder = new PizzaOrder(1,"small");
    var testTopping = new Topping("cheese",1);
    var testTopping2 = new Topping("pepperoni",2);
    testPizzaOrder.addTopping(testTopping);
    testPizzaOrder.addTopping(testTopping2);
    expect(testPizzaOrder.quantity).to.equal(1);
    expect(testPizzaOrder.pizzaSize).to.equal("small");
    expect(testPizzaOrder.toppings.length).to.equal(2);
  });

  it("creates an order for multiple pizzas with multiple toppings", function() {
    var testPizzaOrder = new PizzaOrder(2,"small");
    var testTopping = new Topping("cheese",1);
    var testTopping2 = new Topping("pepperoni",2);
    testPizzaOrder.addTopping(testTopping);
    testPizzaOrder.addTopping(testTopping2);
    expect(testPizzaOrder.quantity).to.equal(2);
    expect(testPizzaOrder.pizzaSize).to.equal("small");
    expect(testPizzaOrder.toppings.length).to.equal(2);
  });
});
