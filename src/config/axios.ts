import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            //config header
        },
    };
});

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        // handling error
        return Promise.reject(error);
    }
);
