describe('PizzaOrder', function() {
  it("returns a single pizza", function() {
    var testPizzaOrder = new Pizza(1,["cheese"],"small");
    expect(testPizza.quantity).to.equal(1);
  });

  it("returns a single topping", function() {
    var testPizzaOrder = new Pizza(1,["cheese"],"small");
    expect(testPizza.toppings).to.eql(["cheese"]);
  });

  it("returns the pizza's size", function() {
    var testPizzaOrder = new Pizza(1,["cheese"],"small");
    expect(testPizza.pizzaSize).to.equal("small");
  });
});
