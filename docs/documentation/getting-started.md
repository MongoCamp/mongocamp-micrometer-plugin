# Getting Started

A library to monitor your MongoDB and push all your [Micrometer](https://micrometer.io/) Stats to an Mongodb.

## Dependency Setup
Support Scala 2.12 and Scala 2.13.
<DependencyGroup/>

## Binder
Micrometer Core supports some [build in Binder](https://github.com/micrometer-metrics/micrometer/tree/main/micrometer-core/src/main/java/io/micrometer/core/instrument/binder/mongodb) for MongoDb Monitoring. But when you want more statistics over other MongoDb Statistics you need individual bindings. Some Binders you can find in our [binding collection](binder/).

## Registry
Possibility to persist your Micrometer Stats to your MongoDB.

[Apache 2](https://github.com/MongoCamp/micrometer-mongodb/blob/master/LICENSE)
