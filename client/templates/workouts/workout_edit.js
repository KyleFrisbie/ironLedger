Template.workoutEdit.helpers({
    //add you helpers here
});

Template.workoutEdit.events({
  'submit form': function (e) {
    e.preventDefault();

    var currentWorkoutId = this._id;

    var exerciseProperties = {
      name: $(e.target).find('[name=name]').val()
    };

    Workouts.update(currentWorkoutId, {$set: exerciseProperties}, function (error) {
      if (error) {
        alert(error.reason);
      } else {
        Router.go('workoutPage', {_id: currentWorkoutId});
      }
    });
  },

  'click .delete': function (e) {
    e.preventDefault();

    if (confirm('Delete this workout?')) {
      var currentWorkoutId = this._id;
      Workouts.remove(currentWorkoutId);
      Router.go('workoutsList');
    }
  }
});

Template.workoutEdit.onCreated(function () {
    //add your statement here
});

Template.workoutEdit.onRendered(function () {
    //add your statement here
});

Template.workoutEdit.onDestroyed(function () {
    //add your statement here
});

