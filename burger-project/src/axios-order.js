import axios from 'axios';

const instance = axios.create({
  baseURL: "https://react-my-burger-7c5ee.firebaseio.com/"
});

export default instance;
