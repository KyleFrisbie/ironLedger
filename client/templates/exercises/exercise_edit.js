Template.exerciseEdit.helpers({
    //add you helpers here
});

Template.exerciseEdit.events({
  'submit form': function (e) {
    e.preventDefault();
    
    var currentExerciseId = this._id;
    
    var exerciseProperties = {
      name: $(e.target).find('[name=name]').val(),
      bodyPart: $(e.target).find('[name=bodyPart]').val()
    };
    
    Exercises.update(currentExerciseId, {$set: exerciseProperties}, function (error) {
      if (error) {
        sAlert.error(error.reason);
      } else {
        Router.go('exercisePage', {_id: currentExerciseId});
      }
    });
  },
  
  'click .delete': function (e) {
    e.preventDefault();
    
    if (confirm('Delete this post?')) {
      var currentExerciseId = this._id;
      Exercises.remove(currentExerciseId);
      Router.go('exercisesList');
    }
  }
});

Template.exerciseEdit.onCreated(function () {
    //add your statement here
});

Template.exerciseEdit.onRendered(function () {
    //add your statement here
});

Template.exerciseEdit.onDestroyed(function () {
    //add your statement here
});

