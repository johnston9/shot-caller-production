import axios from "axios";

axios.defaults.baseURL = "my-new-drf-app";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;