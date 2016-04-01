Template.exerciseSubmit.helpers({
    //add you helpers here
});

Template.exerciseSubmit.events({
  'submit form': function (e) {
    e.preventDefault();
    
    var exercise = {
      name: $(e.target).find('[name=name]').val(),
      bodyPart: $(e.target).find('[name=bodyPart]').val()
    };
    
    exercise._id = Exercises.insert(exercise)
    Router.go('exercisePage', exercise)
  }
});

Template.exerciseSubmit.onCreated(function () {
    //add your statement here
});

Template.exerciseSubmit.onRendered(function () {
    //add your statement here
});

Template.exerciseSubmit.onDestroyed(function () {
    //add your statement here
});

