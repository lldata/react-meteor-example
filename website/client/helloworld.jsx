//var cx = React.addons.classSet;

//var ProgressBar = require('react-bootstrap').ProgressBar;
//          <ProgressBar striped bsStyle="success" now={40} />

var HelloPackage = Imports.HelloPackage;

var HelloWorld = React.createClass({
  renderName: 'HelloWorld',
  render: function() {
    return <div>
      <h1>Hello World!</h1>
      <hr/>
      <HelloPackage />
      <hr/>
      <Imports.HelloBootstrap />
      <hr/>
      <Imports.QuoteList />
    </div>
  }
});

Meteor.startup(function() {
  React.render(
    <HelloWorld />,
    document.getElementById("helloworld")
  );
});
