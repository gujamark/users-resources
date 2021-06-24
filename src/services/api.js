import axios from 'axios';

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
}
