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
    
    Meteor.call('exerciseInsert', exercise, function (error, result) {
      if (error) {
        return alert(error.reason);
      }
      
      if (result.exerciseExists) {
        alert('This exercise has already been posted')
      }
      
      Router.go('exercisePage', {_id: result._id});
    });
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

