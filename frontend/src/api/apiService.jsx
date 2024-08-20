import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getUsers = async () => {
  return await axios.get(`${API_URL}/api/user/all`);
};

export const addUser = async (newUser) => {
  return await axios.post(`${API_URL}/api/user`, newUser);
};

export const deleteUser = async (userId) => {
  return await axios.delete(`${API_URL}/api/user/${userId}`);
};
