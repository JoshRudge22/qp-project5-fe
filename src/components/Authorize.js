import axios from "axios";

const signUp = async (userData) => {
  try {
    const response = await axios.post("/auth/signup/", userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { error: "Network error" };
  }
};

const logIn = async (credentials) => {
  try {
    const response = await axios.post("/auth/login/", credentials);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { error: "Network error" };
  }
};

const logOut = async () => {
  try {
    const response = await axios.post("/auth/logout/");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { error: "Network error" };
  }
};

export { signUp, logIn, logOut };