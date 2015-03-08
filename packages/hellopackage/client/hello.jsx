var HelloPackage = React.createClass({
  render: function() {
    return <div>This is a very simple React component packaged as a meteor package</div>;
  }
});

// exports
Imports.HelloPackage = HelloPackage;
