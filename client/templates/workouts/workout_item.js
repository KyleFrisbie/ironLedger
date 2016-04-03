Template.workoutItem.helpers({
  ownWorkout: function () {
    return this.userId === Meteor.userId();
  }
});

Template.workoutItem.events({
    //add your events here
});

Template.workoutItem.onCreated(function () {
    //add your statement here
});

Template.workoutItem.onRendered(function () {
    //add your statement here
});

Template.workoutItem.onDestroyed(function () {
    //add your statement here
});

