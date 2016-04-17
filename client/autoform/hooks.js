var exerciseHooksObject = {
  before: {
    method: function (doc) {
      var user = Meteor.user();
      doc.userId = user._id;
      doc.author = user.username;

      doc.submitted = new Date();
      
      console.log(doc);
      this.result(doc);
    }
  },
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
  before: {
    method: function (doc) {
      console.log(doc);
      var exercises = [];
      doc.exercises.forEach(function (exercise) {
        var exercise = Exercises.findOne({id:exercise.id})
        console.log(exercise);
        exercises.push(exercise);
      });
      doc.exercises = exercises;
      console.log(doc);
      this.result(doc);
    }
  },
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
AutoForm.addHooks(['workoutSubmit'], workoutHooksObject);

AutoForm.debug();
