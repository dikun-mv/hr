module.exports = server => {
  const User = server.models.User;

  User.create({email: 'admin@test', username: 'admin', password: 'admin'});
};
