import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-project-87aca.firebaseio.com/"
});

export default instance;
