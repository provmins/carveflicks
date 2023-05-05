import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getAccount = async (params, email, password) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${params}`, {
      email,
      password
    });
    return response;
  } catch (err) {}
};

export const getServer = async type => {
  try {
    const response = await axios.get(`${SERVER_URL}/${type}`);
    return response;
  } catch (err) {}
};
