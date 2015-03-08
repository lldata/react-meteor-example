var yql = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22AAPL%22%2C%22QQQ%22%2C%22FB%22%2C%22MSFT%22%2C%22TSLA%22%2C%22GOOGL%22%2C%22INTC%22%2C%22CMCSA%22%2C%22AMZN%22%2C%22GOOG%22%2C%22GILD%22%2C%22QCOM%22%2C%22PCLN%22%2C%22NFLX%22%2C%22EBAY%22%2C%22MU%22%2C%22CSCO%22%2C%22PCYC%22%2C%22XIV%22%2C%22BIIB%22%0A)&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback="

function loadQuotes() {
  console.log("loadQuotes")
  try {
    var result = Meteor.http.call("GET", yql);

    result.data.query.results.quote.map(function(q) {
      //console.log(q);
      Quotes.update({"_id":q.symbol}, {"_id":q.symbol, "data":q}, {"upsert":true})
    });

  } catch (e) {
    console.log("yahoo stock quotes fetch error" + e)
  }
}

function scheduleLoad() {
  Meteor.setTimeout(loadQuotes, 1000);
}

scheduleLoad();
