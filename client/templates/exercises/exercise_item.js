Template.exerciseItem.helpers({
  ownExercise: function () {
    return this.userId === Meteor.userId();
  }
});

Template.exerciseItem.events({
    //add your events here
});

Template.exerciseItem.onCreated(function () {
    //add your statement here
});

Template.exerciseItem.onRendered(function () {
    //add your statement here
});

Template.exerciseItem.onDestroyed(function () {
    //add your statement here
});

