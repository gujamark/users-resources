import axios from 'axios';

export default class API_SERVICE {
  static async getUsers() {
    const url = `${process.env.REACT_APP_REQRES_API}/users`;
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      console.group('[getUsers]@catch');
      console.trace(error);
      console.groupEnd();
      return error;
    }
  }
}
