Workouts = new Mongo.Collection('workouts');
Workouts.attachSchema(WorkoutSchema);

Workouts.permit(['insert', 'update']).ifLoggedIn();

Meteor.methods({
  workoutInsert: function (workoutAttributes) {
    check(workoutAttributes, Workouts.simpleSchema());

    var workoutWithSameName = Workouts.findOne({name: workoutAttributes.name});
    if (workoutWithSameName) {
      return {
        workoutExists: true,
        _id: workoutWithSameName._id
      }
    }

    var user = Meteor.user();
    
    var workout = _.extend(workoutAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var workoutId = Workouts.insert(workout);

    return {
      _id: workoutId
    };
  }
});
