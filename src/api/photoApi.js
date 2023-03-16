import axiosClient from "./axiosClient";

const photoAPI = {
  getAll: (params) => {
    const url = "/products";
    return axiosClient.get(url, {params});
  },
};
export default photoAPI;
