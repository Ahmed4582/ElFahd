import axios from "axios";

const profileApi = axios.create({
  baseURL: "https://www.web-allsafeeg.com/fahd/api/fahd",
});

// Add a request interceptor
profileApi.interceptors.request.use(
  function (config) {
    const lang = localStorage.getItem("i18nextLng");
    config.headers["lang"] = lang || "en";

    config.headers["Accept"] = "application/json";

    // config
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
profileApi.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default profileApi;
