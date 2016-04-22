ExerciseSchema = new SimpleSchema({
  // author: {
  //   type: String,
  //   label: "Author",
  //   autoform: {
  //     omit: true
  //   }
  // },
  // userId: {
  //   type: String,
  //   label: "User ID",
  //   autoform: {
  //     omit: true
  //   }
  // },
  // submitted: {
  //   type: Date,
  //   label: "Date Submitted",
  //   autoform: {
  //     omit: true
  //   }
  // },
  name: {
    type: String,
    label: "Exercise Name",
    max: 200
  },
  bodyPart: {
    type: String,
    label: "Body Part/Muscle Group",
    optional: true
  }
});
