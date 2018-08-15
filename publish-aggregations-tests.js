// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by publish-aggregations.js.
import { name as packageName } from "meteor/kschingiz:publish-aggregations";

// Write your tests here!
// Here is an example.
Tinytest.add('publish-aggregations - example', function (test) {
  test.equal(packageName, "publish-aggregations");
});
