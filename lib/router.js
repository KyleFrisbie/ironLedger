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

Router.route('/exercise/edit/:_id', {
  name: 'exerciseEdit',
  data: function () {
    return Exercises.findOne(this.params._id);
  }
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

Router.route('/workout/:_id/edit', {
  name: 'workoutEdit',
  data: function () {
    return Workouts.findOne(this.params._id);
  }
});

/* verify that users are logged in */
var requireLogin = function () {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
};

Router.onBeforeAction('dataNotFound', {only: ['exercisePage', 'workoutPage']});
Router.onBeforeAction(requireLogin, {only: ['exerciseSubmit', 'workoutSubmit']});
