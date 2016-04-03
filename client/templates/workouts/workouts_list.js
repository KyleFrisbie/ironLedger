Template.workoutsList.helpers({
    workouts: function () {
      return Workouts.find({}, {sort: {name: 1}});
    }
});

Template.workoutsList.events({
    //add your events here
});

Template.workoutsList.onCreated(function () {
    //add your statement here
});

Template.workoutsList.onRendered(function () {
    //add your statement here
});

Template.workoutsList.onDestroyed(function () {
    //add your statement here
});
