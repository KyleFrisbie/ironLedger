if(Exercises.find().count() === 0) {
  Exercises.insert(
    {
      name: 'Bench Press',
      bodyPart: 'chest'
    }
  );
  Exercises.insert(
    {
      name: 'Barbell Bicep Curl',
      bodyPart: 'biceps'
    }
  );
  Exercises.insert(
    {
      name: 'Sit-up',
      bodyPart: 'abdominals'
    }
  );
  Exercises.insert(
    {
      name: 'Squat',
      bodyPart: 'legs'
    }
  )
}

if(Workouts.find().count() === 0) {
  Workouts.insert(
    {
      name: 'Freak-out Friz'
    }
  );
  Workouts.insert(
    {
      name: 'Arnold\'s Oblivion'
    }
  );
  Workouts.insert(
    {
      name: 'Sally\'s Submission'
    }
  );
  Workouts.insert(
    {
      name: 'Repetitive Riggen'
    }
  );
}
