import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const account = async (params, email, password) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${params}`, {
      email,
      password
    });
    return response;
  } catch (err) {}
};
