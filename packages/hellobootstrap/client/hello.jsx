//var ProgressBar = require('react-bootstrap').ProgressBar;

var HelloBootstrap = React.createClass({
  render: function() {
    return <div>
      This is a very simple React component that uses react-bootstrap
      <ReactBootstrap.ProgressBar striped bsStyle="success" now={25} />
      </div>;
  }
});

// exports
Imports.HelloBootstrap = HelloBootstrap;
