/* eslint-disable no-unused-vars */
import axios from 'axios';

const API_URL = 'https://localhost:3000';

const createHeaders = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const signUp = (body) => axios.post(`${API_URL}/sign-up`, body);

export default signUp;