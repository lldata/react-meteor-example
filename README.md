# react-meteor-example
This is just a sunday hacking excersise to learn how react and meteor works together.

I most likely will not get time to maintain this, but I pushed it so others can learn from my mistakes.
It is hard to find react+meteor examples, though it seems like a perfect combination.

This project integrates react frontend, meteor for build and backend, bootstrap for styling and bower for clientside dependency management.

List of links to stuff that is integrated in this example:
  Meteor backend
  - https://github.com/meteor/meteor
  Meteor-react integration
    - https://github.com/reactjs/react-meteor
    - At this time there is a small bug waiting to be fixed in meteor 1.0.33, so I had to use the github version of meteor
    - git clone git://github.com/meteor/meteor.git
    - and then /path/to/meteor/meteor instead of the version you get on your path
  Uses local packages (with a global variable to emulate namespaces)
    - https://dweldon.silvrback.com/local-packages
    - export PACKAGE_DIRS="react-meteor-examples/packages"
  Bower for client side dependency management
    - https://atmospherejs.com/mquandalle/bower
      - created a pull request so I wouldn't get react down twice      https://github.com/mquandalle/meteor-bower/pull/70
      - until that gets merged you can use my pathed version:
      - cd react-meteor-examples/packages
      - git clone https://github.com/lldata/meteor-bower.git
  Bootstrap for styling
  - https://github.com/mangasocial/meteor-bootstrap-3
