import axios from "./axios";

export async function signupRequest(user: unknown) {
    return axios.post(`/auth/signup`, user);
}
export async function signinRequest(user: unknown) {
    return axios.post(`/auth/login`, user);
}

export async function verifyTokenRequest(data: unknown) {
    return axios.get(`/auth/verify`, {
        data: data,
    });
}
