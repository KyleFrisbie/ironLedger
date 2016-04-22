Exercises = new Mongo.Collection('exercises');
Exercises.attachSchema(ExerciseSchema);

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

    // var user = Meteor.user();
    //
    // var exercise = _.extend(exerciseAttributes, {
    //   userId: user._id,
    //   author: user.username,
    //   submitted: new Date()
    // });

    var exerciseId = Exercises.insert(exerciseAttributes);

    return {
      _id: exerciseId
    };
  }
});
