WorkoutSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Workout Name",
    max: 200
  },
  description: {
    type: String,
    label: "Workout Description",
    max: 1000
  },
  exercises: {
    type: [WorkoutExerciseSchema],
    label: "Exercises",
    blackbox: true,
    autoform: {
      // type: "select2",
      validation: "submit",
      // multiple: true,
      // options: function () {
      //   var exercises = Exercises.find();
      //   var data = [];
      //   exercises.forEach(function (exercise) {
      //     data.push({
      //         label: exercise.name,
      //         value: exercise._id
      //       })
      //   });
      //   return data;
      // }
    }
  }
});

