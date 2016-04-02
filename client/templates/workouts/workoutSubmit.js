Template.workoutSubmit.helpers({
  exercises: function() {
    return Exercises.find();
  }
});

Template.workoutSubmit.events({
  'submit form': function (e) {
    e.preventDefault();

    var workout = {
      name: $(e.target).find('[name=name]').val(),
    };

    workout._id = Exercises.insert(workout)
    Router.go('workoutPage', workout)
  }
});

Template.workoutSubmit.onCreated(function () {
    //add your statement here
});

Template.workoutSubmit.onRendered(function () {
    //add your statement here
});

Template.workoutSubmit.onDestroyed(function () {
    //add your statement here
});

