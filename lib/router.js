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

Router.route('/exercises/:_id', {
  name: 'exercisePage',
  data: function () {
    return Exercises.findOne(this.params._id);
  }
});

Router.route('/exercise/submit', {
  name: 'exerciseSubmit'
});

/* workout routes */
Router.route('/workouts', {
  name: 'workoutsList'
});

Router.route('/workouts/:_id', {
  name: 'workoutPage',
  data: function () {
    return Workouts.findOne(this.params._id);
  }
});

Router.route('/workout/submit', {
  name: 'workoutSubmit'
});

Router.onBeforeAction('dataNotFound', {only: ['exercisePage', 'workoutPage']});
