import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.tmdb.org/3",
});

export default instance;
