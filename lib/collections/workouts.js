Workouts = new Mongo.Collection('workouts');

Workouts.allow({
  update: function (userId, workout) {
    return ownsDocument(userId, workout);
  },
  remove: function (userId, workout) {
    return ownsDocument(userId, workout);
  }
});

Workouts.deny({
  update: function (userId, workout, fieldNames) {
    return(_.without(fieldNames, 'name').length > 0);
  }
});

Meteor.methods({
  workoutInsert: function (workoutAttributes) {
    check(Meteor.userId(), String);
    check(workoutAttributes, {
      name: String
    });
    
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
