Exercises = new Mongo.Collection('exercises');

Meteor.methods({
  exerciseInsert: function (exerciseAttributes) {
    check(Meteor.userId(), String);
    check(exerciseAttributes, {
      name: String,
      bodyPart: String
    });

    var exerciseWithSameName = Exercises.findOne({name: exerciseAttributes.name});
    if (exerciseWithSameName) {
      return {
        exerciseExists: true,
        _id: exerciseWithSameName._id
      }
    }

    var user = Meteor.user();
    var exercise = _.extend(exerciseAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var exerciseId = Exercises.insert(exercise);

    return {
      _id: exerciseId
    };
  }
});

