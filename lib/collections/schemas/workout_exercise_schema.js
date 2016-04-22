PersonalRecordSchema = new SimpleSchema({
  date: {
    type: Date
  },
  qualifier: {
    type: String,
    allowedValues: ['estimated', 'actual']
  },
  stress: {
    type: Number
  },
  stressUnit: {
    type: String,
    allowedValues: ['lbs', 'kg', 'm', 'ft']
  },
  strain: {
    type: Number
  },
  strainUnit: {
    type: String,
    allowedValues: ['reps', 'sec', 'min', 'kcal']
  }
});

SetSchema = new SimpleSchema({
  setNumber: {
    type: Number
  },
  restTime: {
    type: Number
  },
  stress: {
    type: Number
  },
  stressUnit: {
    type: String,
    allowedValues: ['lbs', 'kg', 'm', 'ft']
  },
  strain: {
    type: Number
  },
  strainUnit: {
    type: String,
    allowedValues: ['reps', 'sec', 'min', 'kcal']
  }
});

WorkoutExerciseSchema = new SimpleSchema({
  exercise: {
    type: ExerciseSchema,
    label: "Exercise"
  },
  sets: {
    type: [SetSchema],
    blackbox: true
  }
});

