Exercises = new Mongo.Collection('exercises');

Exercises.allow({
  update: function (userId, exercise) {
    return ownsDocument(userId, exercise);
  },
  remove: function (userId, exercise) {
    return ownsDocument(userId, exercise);
  }
});

Exercises.deny({
  update: function (userId, exercise, fieldNames) {
    return(_.without(fieldNames, 'name', 'bodyPart').length > 0);
  }
});

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

