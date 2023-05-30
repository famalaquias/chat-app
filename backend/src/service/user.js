const md5 = require('md5');
const { errorsTypes } = require('../utils/errorsCatalog');
const generateToken = require('../utils/generateToken');
const { getUserByCPF, insertUser, getAllUsers } = require('../model/mongoDB');

const login = async ({cpf, password}) => {
  const user = await getUserByCPF(cpf);

  if (!user) throw new Error(errorsTypes.USER_NOT_FOUND);

  if (md5(password) !== user.password) throw new Error(errorsTypes.INVALID_PASSWORD);

  const token = generateToken(user);
  return { user, token };
};

const register = async (user) => {
  const getUser = await getUserByCPF(user.cpf);

  if (getUser) throw new Error(errorsTypes.USER_EXIST);

  const hasPassword = md5(user.password);

  const newUser = { 
    name: user.name,
    lastname: user.lastname,
    cpf: user.cpf,
    password: hasPassword,
    status: user.status
  }

  return await insertUser(newUser);
};

const getOne = async (cpf) => {
  return await getUserByCPF(cpf);
};

const getAllUser = async () => {
  return await getAllUsers();
};
  
module.exports = {
  login,
  register,
  getAllUser,
  getOne,
};