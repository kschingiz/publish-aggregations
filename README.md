# publish-aggregations
This package lets to publish aggregation with pipeline and options in MeteorJS

# requirements

1.  Meteor 1.7+
2.  Mongo 3.6+

# why do we need this

Because sometimes we need more flexible solution than original Meteor publications. For example, developing real time analytics system or you need reactive joins, all of these can be achieved by aggreations, but they are doesn't supported in meteor publications. 

This package heavily uses mongo change streams, and will NOT work properly if your db or application doesn't support it.
From MongoDB docs:
Change streams allow applications to access real-time data changes without the complexity and risk of tailing the oplog. Applications can use change streams to subscribe to all data changes on a single collection, a database, or an entire deployment, and immediately react to them. Because change streams use the aggregation framework, applications can also filter for specific changes or transform the notifications at will.

# API

You can read about change streams here https://docs.mongodb.com/manual/changeStreams/

publish example:

```
import PublishAggregations from "meteor/kschingiz:publish-aggregations";

Meteor.publish("example", function() {
  return new PublishAggregations(MyCollection, [
    { $addFields: { "newField": "this is my new field!" } }
  ]);
});
```

# TODO

1.  Test coverage (HELP NEEDED)
2.  Deploy example app working with change streams

# Contributions

Contributions are welcome, feel free to create issues on github

# LICENSE

MIT
