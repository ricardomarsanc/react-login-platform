import axios from "axios";

const apiClient = (url: string) => {
  const axiosInstance = axios.create({
    baseURL: url,
    responseType: "json",
  });

  return axiosInstance;
};

export default apiClient;
