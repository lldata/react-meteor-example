# react-meteor-example
This is just a Sunday hacking exercise to learn how react and meteor works together.

I most likely will not get time to maintain this, but I pushed it so others can learn from my mistakes.
It is hard to find react+meteor examples, though it seems like a perfect combination.

This project integrates react frontend, meteor for build and backend, bootstrap for styling and bower for client side dependency management.

List of links to stuff that is integrated in this example:
* Meteor backend
  - https://github.com/meteor/meteor
* Meteor-react integration
    - https://github.com/reactjs/react-meteor
    - At this time there is a small bug waiting to be fixed in meteor 1.0.33, so I had to use the github version of meteor
    - git clone git://github.com/meteor/meteor.git
    - and then /path/to/meteor/meteor instead of the version you get on your path
* Uses local packages (with a global variable to emulate namespaces)
    - https://dweldon.silvrback.com/local-packages
    - export PACKAGE_DIRS="react-meteor-examples/packages"
* Bower for client side dependency management
    - https://atmospherejs.com/mquandalle/bower
      - created a pull request so I wouldn't get react down twice      https://github.com/mquandalle/meteor-bower/pull/70
      - until that gets released you can use my patched version:
      - cd react-meteor-examples/packages
      - git clone https://github.com/lldata/meteor-bower.git
* Bootstrap for styling
  - http://getbootstrap.com/
  - https://github.com/mangasocial/meteor-bootstrap-3
* Import REST data to Mongo
  - Yahoo Finance
  - https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22AAPL%22%2C%22QQQ%22%2C%22FB%22%2C%22MSFT%22%2C%22TSLA%22%2C%22GOOGL%22%2C%22INTC%22%2C%22CMCSA%22%2C%22AMZN%22%2C%22GOOG%22%2C%22GILD%22%2C%22QCOM%22%2C%22PCLN%22%2C%22NFLX%22%2C%22EBAY%22%2C%22MU%22%2C%22CSCO%22%2C%22PCYC%22%2C%22XIV%22%2C%22BIIB%22%0A)&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=

Happy hacking!

/Lasse
