Template.workoutSubmit.helpers({
  selectTwo: function () {
    return {
      placeholder: 'Add exercises',
      tags: true,
      tokenSeparators: [',', ' ']
    }
  },
  relatedWorkoutDoc: function () {
    return Workouts.findOne()
  },
  getTableRows: function () {
    return ;
  }
});

Template.workoutSubmit.events({
  'click #addExercise': function () {
    $('#exercises tbody:last-child').append('<tr><td>One</td><td>Two</td><td>Three</td><td>Four</td></tr>');
    if($('#exercises > tbody > tr').length) {
      $('#exercises').show();
    }
  },
  'submit form': function (e) {
    e.preventDefault();

    var workout = {
      name: $(e.target).find('[id=workoutName]').val(),
      description: $(e.target).find('[id=workoutDescription]').val()
    };

    console.log(workout);
    Meteor.call('workoutInsert', workout, function (error, result) {
      if (error) {
        return sAlert.error(error.reason);
      }

      if (result.workoutExists) {
        sAlert.error('This workout has already been posted');
      }

      Router.go('workoutPage', {_id: result._id})
    });
  }
})
;

Template.workoutSubmit.onCreated(function () {
  //add your statement here
});

Template.workoutSubmit.onRendered(function () {
  //add your statement here
});

Template.workoutSubmit.onDestroyed(function () {
  //add your statement here
});

