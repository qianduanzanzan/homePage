import axios, {
  AxiosInstance, // 请求实例对象
  AxiosResponse, // 响应对象
  InternalAxiosRequestConfig,
} from "axios";

const axiosDefault = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  timeout: 60000,
  baseURL: "",
  data: {},
};

const axiosInstance: AxiosInstance = axios.create(axiosDefault);
// 请求拦截
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 响应拦截
axiosInstance.interceptors.response.use(
  async (response: AxiosResponse) => {
    return Promise.resolve(response);
  },
  // 这里处理错误的逻辑
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
