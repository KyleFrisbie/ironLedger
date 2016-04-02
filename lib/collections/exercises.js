Exercises = new Mongo.Collection('exercises');

Exercises.allow({
  insert: function(userId, doc) {
    return !! userId;
  }
});
