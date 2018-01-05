import axios from 'axios';


export const handleSuccessResponse = response => response.data;
export const handleErrorResponse = error => error.response;


class RestBaseService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  }

  get(url) {
    return this
      .axios({
        method: 'get',
        url,
      });
  }
}


export default RestBaseService;