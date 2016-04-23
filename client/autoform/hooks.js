var exerciseHooksObject = {
  // before: {
  //   method: function (doc) {
  //     var user = Meteor.user();
  //     doc.userId = user._id;
  //     doc.author = user.username;
  //
  //     doc.submitted = new Date();
  //
  //     console.log(doc);
  //     this.result(doc);
  //   }
  // },
  onSuccess: function (method, result) {
    if (result.exerciseExists) {
      sAlert.error('This exercise has already been posted');
    }
    Router.go('exercisePage', {_id: result._id});
  },
  onError: function (method, error) {
    return sAlert.error(error.reason);
  }
};

var workoutHooksObject = {
  // formToDoc: function (doc) {
  //   var exercises = [];
  //   doc.exercises.forEach(function (exercise) {
  //     var dbExercise = Exercises.findOne({_id: exercise});
  //     exercises.push(dbExercise);
  //   });
  //   doc.exercises = [];
  //   exercises.forEach(function (exercise) {
  //     doc.exercises.push(exercise);
  //   });
  //   console.log(doc);
  //   return doc;
  // },
  // before: {
  //   method: function (doc) {
  //     var exercises = [];
  //     doc.exercises.forEach(function (exercise) {
  //       var dbExercise = Exercises.findOne({_id: exercise});
  //       exercises.push(dbExercise);
  //     });
  //     doc.exercises = exercises;
  //     console.log(doc.exercises);
  //     return doc;
  //   }
  // },
  onSuccess: function (method, result) {
    if (result.exerciseExists) {
      sAlert.error('This workout has already been posted');
    }
    Router.go('workoutPage', {_id: result._id});
  },
  onError: function (method, error) {
    return sAlert.error(error.reason);
  }
};


// var workoutHooksObject = {
//   onSuccess: function (method, result) {
//     if (result.workoutExists) {
//       sAlert.error('This workout has already been posted');
//     }
//     Router.go('workoutPage', {_id: result._id});
//   },
//   onError: function (method, error) {
//     return sAlert.error(error.reason);
//   }
// };

AutoForm.addHooks(['exerciseSubmit'], exerciseHooksObject);
// AutoForm.addHooks(['workoutSubmit'], workoutHooksObject);

AutoForm.debug();
