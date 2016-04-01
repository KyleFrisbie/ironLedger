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
      title: 'Freak-out Friz'
    }
  );
  Workouts.insert(
    {
      title: 'Arnold\'s Oblivion'
    }
  );
  Workouts.insert(
    {
      title: 'Sally\'s Submission'
    }
  );
  Workouts.insert(
    {
      title: 'Repetitive Riggen'
    }
  );
}
