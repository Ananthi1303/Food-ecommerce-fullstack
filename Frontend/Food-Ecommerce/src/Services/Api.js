import axios from "axios";

const API = axios.create({
    baseURL: "https://localhost:44347/api"
});

export default API;