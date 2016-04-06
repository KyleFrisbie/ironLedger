var exerciseHooksObject = {
  before: {
    method: function (doc) {
      var user = Meteor.user();
      doc.userId = user._id;
      doc.author = user.username;

      doc.submitted = new Date();
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

AutoForm.addHooks(['exerciseSubmit'], exerciseHooksObject);

var workoutHooksObject = {
  onSuccess: function (method, result) {
    if (result.workoutExists) {
      sAlert.error('This workout has already been posted');
    }
    Router.go('workoutPage', {_id: result._id});
  },
  onError: function (method, error) {
    return sAlert.error(error.reason);
  }
};

AutoForm.addHooks(['workoutSubmit'], workoutHooksObject);

AutoForm.debug();
