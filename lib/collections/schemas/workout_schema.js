WorkoutSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Workout Name",
    max: 200
  },
  exercises: {
    type: [Object],
    autoform: {
      type: "select2",
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

