WorkoutSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Workout Name",
    max: 200
  },
  exercises: {
    type: [ExerciseSchema],
    label: "Exercises",
    blackbox: true,
    autoform: {
      type: "select2",
      validation: "submit",
      multiple: true,
      options: function () {
        var exercises = Exercises.find();
        var data = [];
        exercises.forEach(function (exercise) {
          data.push({
              label: exercise.name,
              value: exercise._id
            })
        });
        return data;
      }
    }
  }
});

