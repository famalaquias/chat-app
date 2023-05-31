import axios from 'axios';

const URL_BASE = 'http://localhost:3333';

export const getUserAxios = async (cpf) => {
  const URL = `${URL_BASE}/${cpf}`;
  const {data} = await axios.get(URL);
  return data;
};

export const getUserAllAxios = async () => {
  const URL = `${URL_BASE}`;
  const {data} = await axios.get(URL);
  return data;
}

export const postUserAxios = async (data) => {
  const URL = `${URL_BASE}/register`;
  const response = await axios.post(URL, data);
  return response;
};

export const putUserStatus = async (cpf, status) => {
  const URL = `${URL_BASE}/update/${cpf}`;
  const response = await axios.put(URL, {status});
  return response;
};
