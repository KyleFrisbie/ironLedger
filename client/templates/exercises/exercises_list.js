Template.exercisesList.helpers({
  exercises: function () {
    return Exercises.find({}, {sort: {name: 1}});
  }
});

Template.exercisesList.events({
    //add your events here
});

Template.exercisesList.onCreated(function () {
    //add your statement here
});

Template.exercisesList.onRendered(function () {
    //add your statement here
});

Template.exercisesList.onDestroyed(function () {
    //add your statement here
});

