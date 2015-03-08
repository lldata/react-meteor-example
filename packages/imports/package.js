Package.describe({
  name: 'imports',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Provides a public namespace for react packages',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

/*
Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('imports.js', ['client', 'server']);
  api.export("LL", ['client','server']);
});
*/


Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles([
    "imports.js"
  ], ['client', 'server']);
  api.export("Imports", ['client','server']);
});
