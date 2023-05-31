const md5 = require('md5');
const { errorsTypes } = require('../utils/errorsCatalog');
const generateToken = require('../utils/generateToken');
const { getUserByCPF, insertUser, getAllUsers, updateUserByStatus } = require('../model/mongoDB');
const statusHttp = require('../utils/statusHttp');

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
  const result = await getUserByCPF(cpf);
  if (result === null || result === 'null') {
    throw new Error('CPF invalido')
  }
  return result;
};

const getAllUser = async () => {
  const result = await getAllUsers();
  return result;
};

const updateOneStatus = async (cpf, status) => {
  const result = await updateUserByStatus(cpf, status);
  return result;
}
  
module.exports = {
  login,
  register,
  getAllUser,
  getOne,
  updateOneStatus
};