import axios from "axios";

axios.defaults.baseURL = "https://joshapp-backend-efcd8c73d793.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;