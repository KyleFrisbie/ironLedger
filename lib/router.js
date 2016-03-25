Router.configure({
  layoutTemplate: 'layout',
  waitOn: function () {
    return [
      Meteor.subscribe('workouts'),
      Meteor.subscribe('exercises')
    ];
  }
});

Router.route('/', {
  name: 'exercisesList'
});

Router.route('/workouts', {
  name: 'workoutsList'
});
