Meteor.publish('publicCollections', function() {
  return Collections.find({userId: {$exists: false}});
});

// Meteor.publish('privateCollections', function() {
//   if (this.userId) {
//     return Collections.find({userId: this.userId});
//   } else {
//     this.ready();
//   }
// });
