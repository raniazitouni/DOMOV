import axios from "axios";

const Api = axios.create({
    baseURL: "http://6c84-41-220-153-34.ngrok-free.app/"
});

export default Api;