const userService = require('../service/user');
const statusHttp = require('../utils/statusHttp');

const login = async (req, res) => {
  const { cpf, password } = req.body;
  const result = await userService.login(cpf, password);
  res.status(statusHttp.OK).json(result);
};

const register = async (req, res) => {
  const { cpf, password, name, lastname, status } = req.body;
  const result = await userService.register({ cpf, password, lastname, name, status });
  res.status(statusHttp.CREATED).json(result);
};

const getAllUser = async (_req, res) => {
  try {
    const result = await userService.getAllUser();
    res.status(statusHttp.OK).send(result);
  } catch (err) {
    res.status(statusHttp.NOT_FOUND).send({ error: err.message });
  }
};

const getOne = async (req, res) => {
  try {
    const { cpf } = req.params;
    const result = await userService.getOne(cpf);
    res.status(statusHttp.OK).send(result);
  } catch (err) {
    res.status(statusHttp.NOT_FOUND).send({ error: err.message });
  }
};

const updateOneStatus = async (req, res) => {
  const { cpf } = req.params;
  const { status } = req.body;
  const result = await userService.updateOneStatus(cpf, status);
  res.status(statusHttp.OK).send(result);
}

module.exports = {
  login,
  register,
  getAllUser,
  getOne,
  updateOneStatus
};
