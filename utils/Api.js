import axios from "axios";

const Api = axios.create({
    baseURL: "http://192.168.4.1:80/"
});

export default Api;