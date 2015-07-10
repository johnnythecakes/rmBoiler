// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Collections.find().count() === 0) {
    var data = [];
      };

    // var timestamp = (new Date()).getTime();
    // _.each(data, function(list) {
    //   var list_id = Lists.insert({name: list.name,
    //     incompleteCount: list.items.length});

    //   _.each(list.items, function(text) {
    //     Todos.insert({listId: list_id,
    //                   text: text,
    //                   createdAt: new Date(timestamp)});
    //     timestamp += 1; // ensure unique timestamp.
    //   });
    // });
  // }
});