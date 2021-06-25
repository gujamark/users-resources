import axios from 'axios';
import { AUTH_TOKEN } from '../utils/constants';

export default class API_SERVICE {
  static async getUsers(page) {
    const url = `${process.env.REACT_APP_REQRES_API}/users?page=${page}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.group('[getUsers]@catch');
      console.trace(error);
      console.groupEnd();
      return error;
    }
  }

  static async login({ email, password }) {
    const url = `${process.env.REACT_APP_REQRES_API}/login`;

    try {
      const response = await axios.post(url, {
        email: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      if (error.response.status === 400) {
        return error.response.data;
      }
      return error;
    }
  }

  static logout() {
    localStorage.removeItem(AUTH_TOKEN);
  }
}
