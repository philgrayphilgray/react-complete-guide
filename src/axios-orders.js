import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-484c2.firebaseio.com/"
});

export default instance;
