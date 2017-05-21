module.exports = server => {
  const User = server.models.User;
  const Vacancy = server.models.Vacancy;

  User.create({email: 'admin@test', username: 'admin', password: 'admin'});

  Vacancy.create([
    {
      title: 'Vacancy 1',
      description: 'Description of vacancy 1',
      skills: ['skill 1.1', 'skill 1.2'],
      opened: new Date('2017-05-05'),
      closed: new Date('2017-05-10')
    },
    {
      title: 'Vacancy 2',
      description: 'Description of vacancy 2',
      skills: ['skill 2.1', 'skill 2.2']
    }
  ]);
};
