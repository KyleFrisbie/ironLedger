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

Exercises.permit(['insert', 'update']).allowInClientCode();

// Exercises.allow({
//   update: function (userId, exercise) {
//     return ownsDocument(userId, exercise);
//   },
//   remove: function (userId, exercise) {
//     return ownsDocument(userId, exercise);
//   }
// });
//
// Exercises.deny({
//   update: function (userId, exercise, fieldNames) {
//     return (_.without(fieldNames, 'name', 'bodyPart').length > 0);
//   }
// });

Meteor.methods({
  exerciseInsert: function (exerciseAttributes) {
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

    check(exerciseAttributes, Exercises.simpleSchema());

    var exerciseId = Exercises.insert(exercise);

    return {
      _id: exerciseId
    };
  }
});

