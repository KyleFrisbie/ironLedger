function exerciseSelect() {
  var exercises = Exercises.find();
  var data = [];
  exercises.forEach(function (exercise) {
    data.push({
      id: exercise._id,
      text: exercise.name
    });
  });
  $('#exercises tbody:last-child .exerciseNameSelect').select2({
    data: data,
    tags: true,
    placeholder: "exercise name"
  });
}

Template.workoutSubmit.helpers({
  getTableRows: function () {
    return;
  }
});

Template.workoutSubmit.events({
  'click .removeExercise': function (e) {
    $(('#exercise_' + e.currentTarget.id)).remove();
  },
  'select2:select #exerciseNameSelect': function () {
    var exerciseId = $('#exerciseNameSelect :selected').text();
    if (!(Exercises.findOne({name: exerciseId}))) {

    }
  },
  'click #addExercise': function () {
    var rows = $('#exercises > tbody > tr').length;
    if (rows == 0) {
      $('#exercises').show();
    }
    var newExercise = $('#exercises tbody:last-child').append('<tr id=\'exercise_' + rows + '\'>' +
      '<td>' +
      '    <select class="form-control exerciseNameSelect"></select>' +
      '</td>' +
      '<td>' +
      '    <input type="number" class="form-control" placeholder="stress (lbs/time)">' +
      '</td>' +
      '<td>' +
      '    <select class="form-control">' +
      '        <option>lbs</option>' +
      '        <option>kg</option>' +
      '        <option>sec</option>' +
      '    </select>' +
      '</td>' +
      '<td>' +
      '    <input type="number" class="form-control" placeholder="strain (reps/distance)">' +
      '</td>' +
      '<td>' +
      '    <select class="form-control">' +
      '        <option>reps</option>' +
      '        <option>m</option>' +
      '        <option>miles</option>' +
      '        <option>sec</option>' +
      '    </select>' +
      '</td>' +
      '<td>' +
      '    <input type="number" class="form-control" placeholder="rest time (s)">' +
      '</td>' +
      '<td>' +
      '    <a href="#" id="' + rows + '" class="removeExercise btn btn-danger" role="button"><span class="glyphicon glyphicon-minus"></span></a>' +
      '</td>' +
      '</tr>');
    exerciseSelect();
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
});

Template.workoutSubmit.onDestroyed(function () {
  //add your statement here
});

