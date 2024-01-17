import axios from "axios";

// https://quickstart-1614178089364.et.r.appspot.com/

// const axiosInterceptorInstance = axios.create({
//   baseURL: "http://localhost:8080", // Replace with your API base URL
// });

const axiosInterceptorInstance = axios.create({
  baseURL: "https://quickstart-1614178089364.et.r.appspot.com", // Replace with your API base URL
});

// Request interceptor
// axiosInterceptorInstance.interceptors.request.use(
//   (config) => {
//     // Modify the request config here (add headers, authentication tokens)
//         const accessToken = JSON.parse(localStorage.getItem("token"));

//     // If token is present add it to request's Authorization Header
//     // if (accessToken) {
//     //   if (config.headers) config.headers.token = accessToken;
//     // }
//     // return config;
//   },
//   (error) => {
//     // Handle request errors here

//     return Promise.reject(error);
//   }
// );
// End of Request interceptor

// // Response interceptor
// axiosInterceptorInstance.interceptors.response.use(
//   (response) => {
//     // Modify the response data here

//     return response;
//   },
//   (error) => {
//     // Handle response errors here

//     return Promise.reject(error);
//   }
// );
// // End of Response interceptor

export default axiosInterceptorInstance;
