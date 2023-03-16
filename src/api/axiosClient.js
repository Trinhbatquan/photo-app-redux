import axios from "axios";
import queryString from "query-string";
import { getAuth } from "firebase/auth";


const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    "content-type": "application/json",
  },
  // paramsSerializer: (params) => queryString.stringify(params),
  paramsSerializer: {
    indexes: false, // empty brackets like `arrayOfUserIds[]`
  },
  // paramsSerializer: {
  //   serialize: stringify
  // }
});
// nhận phương thức (get, post, delete,... + baseUrl + param dạng obj )
// xử lý requests => tạo https request lên server bằng axios
//có dữ liệu, qua responses => return về data

axiosClient.interceptors.request.use(async (config) => {
  const auth = getAuth();
  //lấy ác thực tại thời điểm hiện tại
  const user = auth.currentUser;
  //lấy người truy cập taiij thời điểm hiện tại
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  } 
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
