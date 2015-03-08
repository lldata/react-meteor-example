Quotes = new Meteor.Collection("quotes");

Meteor.publish("quotes", function() {
  return Quotes.find();
});

Meteor.methods({
  buyStocks: function(symbol, quantity) {
    console.log("TODO buying stocks")
  }
});
