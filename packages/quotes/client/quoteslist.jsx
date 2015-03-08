var cx = React.addons.classSet;

Quotes = new Meteor.Collection("quotes");

var QuoteList = ReactMeteor.createClass({
  displayName: 'quotes',
  startMeteorSubscriptions: function() {
    Meteor.subscribe("quotes");
  },

  getMeteorState: function() {
    var selectedQuote = Quotes.findOne(Session.get("selected_quote"));
    return {
      quotes: Quotes.find({}).fetch(),
      selectedQuote: selectedQuote,
      selectedSymbol: selectedQuote && selectedQuote._id
    };
  },

  buyTenStocks: function() {
    Meteor.call("buyStocks", Session.get("selected_quote"), 10);
  },

  selectQuote: function(id) {
    Session.set("selected_quote", id);
  },

  renderQuote: function(model) {
    var _id = this.state.selectedQuote && this.state.selectedQuote._id;
    return <Quote
      key={model._id}
      symbol={model.data.symbol}
      price={model.data.LastTradePriceOnly}
      className={model._id === _id ? "highlight" : ""}
      onClick={this.selectQuote.bind(this, model._id)}
    />;
  },

  render: function() {
    var children = [
      <ReactBootstrap.Table responsive>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Last price</th>
          </tr>
        </thead>
        <tbody>
          { this.state.quotes.map(this.renderQuote) }
        </tbody>
      </ReactBootstrap.Table>
    ];

    if (this.state.selectedSymbol) {
      children.push(
        <div className="details">
          <div className="name">{this.state.selectedSymbol}</div>
          <input
            type="button"
            className="inc"
            value="Buy 10 stocks"
            onClick={this.buyTenStocks}
          />
        </div>
      );

    } else {
      children.push(
        <div className="none">Click a quote to select</div>
      );
    }

    return <div>{ children }</div>;
  }
});

var Quote = React.createClass({
  render: function() {
    var { symbol, price, ...rest } = this.props;
    return <tr {...rest} className={cx("quote", rest.className)}>
      <td className="symbol">{symbol}</td>
      <td className="lastTradePrice">{price}</td>
    </tr>;
  }
});

// exports
Imports.QuoteList = QuoteList;
