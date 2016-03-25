Meteor.publish('workouts', function () {
  return Workouts.find();
});

Meteor.publish('exercises', function () {
  return Exercises.find();
});
