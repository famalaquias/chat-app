const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const { id, email, role } = user;
  const payload = {
    id,
    email,
    role,
  };

  const config = {
    expiresIn: '1d',
  };

  const token = jwt.sign(payload, 'connect-key', config);

  return token;
};

module.exports = generateToken;