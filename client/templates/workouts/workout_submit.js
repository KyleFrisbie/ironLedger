Template.workoutSubmit.helpers({
  // exercises: function() {
  //   return Exercises.find();
  // }
  selectTwo: function () {
    return {
      placeholder: 'Add exercises',
      tags: true,
      tokenSeparators: [',', ' ']
    }
  },
  relatedWorkoutDoc: function () {
    return Workouts.findOne()
  }
});

Template.workoutSubmit.events({
  // 'submit form': function (e) {
  //   e.preventDefault();
  //
  //   var workout = {
  //     name: $(e.target).find('[name=name]').val(),
  //   };
  //
  //   Meteor.call('workoutInsert', workout, function (error, result) {
  //     if (error) {
  //       return sAlert.error(error.reason);
  //     }
  //
  //     if (result.workoutExists) {
  //       sAlert.error('This workout has already been posted');
  //     }
  //
  //     Router.go('workoutPage', {_id: result._id})
  //   });
  // }
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

