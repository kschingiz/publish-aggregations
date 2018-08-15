Package.describe({
  name: 'kschingiz:publish-aggregations',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This package lets to publish aggregation with pipeline and options in MeteorJS',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/kschingiz/publish-aggregations',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.7.0.3');
  api.use('ecmascript');
  api.mainModule('publish-aggregations.js');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kschingiz:publish-aggregations');
  api.mainModule('publish-aggregations-tests.js');
});
