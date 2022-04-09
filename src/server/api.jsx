import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://sos-roteiros-api.herokuapp.com/',
});

export default api;
