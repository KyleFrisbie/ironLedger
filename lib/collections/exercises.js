Exercises = new Mongo.Collection('exercises');
Exercises.attachSchema(
  new SimpleSchema({
    author: {
      type: String,
      label: "Author",
      autoform: {
        omit: true
      }
    },
    userId: {
      type: String,
      label: "User ID",
      autoform: {
        omit: true
      }
    },
    submitted: {
      type: Date,
      label: "Date Submitted",
      autoform: {
        omit: true
      }
    },
    name: {
      type: String,
      label: "Exercise Name",
      max: 200
    },
    bodyPart: {
      type: String,
      label: "Body Part/Muscle Group"
    }
  }));

Exercises.permit(['insert', 'update']).ifLoggedIn();

Meteor.methods({
  exerciseInsert: function (exerciseAttributes) {
    check(exerciseAttributes, Exercises.simpleSchema());
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

