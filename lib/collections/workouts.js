Workouts = new Mongo.Collection('workouts');

Workouts.allow({
  insert: function(userId, doc) {
    return !! userId;
  }
});
