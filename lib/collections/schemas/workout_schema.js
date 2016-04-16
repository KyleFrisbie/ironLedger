WorkoutSchema = new SimpleSchema({
    name: {
      type: String,
      label: "Workout Name",
      max: 200
    },
    exercises: {
        type: [ExerciseSchema] 
      }
  });

