describe('PizzaOrder', function() {

  it("creates an order for a single pizza with no toppings", function() {
    var testPizzaOrder = new PizzaOrder(1,[],"small");
    expect(testPizzaOrder.quantity).to.equal(1);
    expect(testPizzaOrder.pizzaSize).to.eql("small");
    expect(testPizzaOrder.toppings).to.eql([]);
  });
});

describe('Topping', function() {

  it("creates a topping with a name and price", function() {
    var testTopping = new Topping("cheese",1);
    expect(testTopping.toppingName).to.equal("cheese");
    expect(testTopping.price).to.equal(1);
  });
});
