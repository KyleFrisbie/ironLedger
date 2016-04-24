function exerciseSelect() {
  var exercises = Exercises.find();
  var data = [];
  exercises.forEach(function (exercise) {
    data.push({
      id: exercise._id,
      text: exercise.name
    });
  });
  $('.exercise').select2({
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
    $(e.currentTarget).parent().parent().parent().remove();
  },
  'select2:select .exerciseNameSelect': function () {
    var exerciseId = $('#exerciseNameSelect :selected').text();
    if (!(Exercises.findOne({name: exerciseId}))) {
  
    }
  },
  'click .removeSet': function(e) {
    $(e.currentTarget).parent().parent().remove();
  },
  'click #addExercise': function () {
    var exercises = $('.exercise').length;
    $('.exercises').append(
      '<div id="exercise_' + exercises + '" class="well">' +
      '<div class="row">' +
      '<div class="col-md-10">' +
      '  <select id="exercise_' + exercises + '" class="exercise form-control exerciseNameSelect"></select>' +
      '</div>' +
      '<div class="col-md-2">' +
      '<button type="button" class="removeExercise btn btn-danger">Remove Exercise</button>' +
      '</div>' +
      '<div class="sets"><br/>' +
      '    <label for="exercise_sets">Sets: </label>' +
      '    <table class="table table-hover" id="exercise' + exercises + '_sets">' +
      '        <thead>' +
      '        <tr>' +
      '            <th>Stress Quantity</th>' +
      '            <th>Stress Unit</th>' +
      '            <th>Strain Quantity</th>' +
      '            <th>Strain Unit</th>' +
      '            <th>Rest</th>' +
      '            <th></th>' +
      '        </tr>' +
      '        </thead>' +
      '        <tbody>' +
      '        <tr>' +
      '            <td>' +
      '                <input type="number" class="form-control" placeholder="stress (lbs/time)">' +
      '            </td>' +
      '            <td>' +
      '                <select class="form-control">' +
      '                    <option>lbs</option>' +
      '                    <option>kg</option>' +
      '                    <option>sec</option>' +
      '                </select>' +
      '            </td>' +
      '            <td>' +
      '                <input type="number" class="form-control" placeholder="strain (reps/distance)">' +
      '            </td>' +
      '            <td>' +
      '                <select class="form-control">' +
      '                    <option>reps</option>' +
      '                    <option>m</option>' +
      '                    <option>miles</option>' +
      '                    <option>sec</option>' +
      '                </select>' +
      '            </td>' +
      '            <td>' +
      '                <input type="number" class="form-control" placeholder="rest time (s)">' +
      '            </td>' +
      '            <td>' +
      '                <a href="#" class="removeSet btn btn-danger" role="button"><span' +
      '                        class="glyphicon glyphicon-minus"></span></a>' +
      '            </td>' +
      '        </tr>' +
      '        </tbody>' +
      '    </table>' +
      '    <button class="addSet btn btn-default btn-block" type="button" value="Input">Add Set' +
      '    </button>' +
      '</div>' +
      '<hr>' +
      '</div>'
    );
    exerciseSelect();
  },
  'click .addSet': function (e) {
    var setTable = $(e.currentTarget).parent().find('table');
    var newExercise = setTable.find('tbody:last-child').append(
      '<tr id=\'exerciseSet_\'>' +
      '            <td>' +
      '                <input type="number" class="form-control" placeholder="stress (lbs/time)">' +
      '            </td>' +
      '            <td>' +
      '                <select class="form-control">' +
      '                    <option>lbs</option>' +
      '                    <option>kg</option>' +
      '                    <option>sec</option>' +
      '                </select>' +
      '            </td>' +
      '            <td>' +
      '                <input type="number" class="form-control" placeholder="strain (reps/distance)">' +
      '            </td>' +
      '            <td>' +
      '                <select class="form-control">' +
      '                    <option>reps</option>' +
      '                    <option>m</option>' +
      '                    <option>miles</option>' +
      '                    <option>sec</option>' +
      '                </select>' +
      '            </td>' +
      '            <td>' +
      '                <input type="number" class="form-control" placeholder="rest time (s)">' +
      '            </td>' +
      '            <td>' +
      '                <a href="#" class="removeSet btn btn-danger" role="button"><span' +
      '                        class="glyphicon glyphicon-minus"></span></a>' +
      '            </td>' +
      '        </tr>');
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

