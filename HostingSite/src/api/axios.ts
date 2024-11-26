import axios, { Axios } from "axios";

const instance: Axios = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Enable cookies for cross-origin requests
});

export default instance;