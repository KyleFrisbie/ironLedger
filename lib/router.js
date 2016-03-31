Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () {
    return [
      Meteor.subscribe('workouts'),
      Meteor.subscribe('exercises')
    ];
  }
});

/* exercise routes */
Router.route('/', {
  name: 'exercisesList'
});

Router.route('/exercises/:id', {
  name: 'exercisePage',
  data: function () {
    return Exercises.findOne(this.params._id);
  }
});

/* workout routes */
Router.route('/workouts', {
  name: 'workoutsList'
});

Router.route('/workouts/:id', {
  name: 'workoutPage',
  data: function () {
    return Workouts.findOne(this.params._id);
  }
});

Router.onBeforeAction('dataNotFound', {only: ['exercisePage', 'workoutPage']});
