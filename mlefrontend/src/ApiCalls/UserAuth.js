import { BASE_URL } from "../Constants/Constants";
import axios from "axios";

const login = async (userName, password) => {
  let data = {
    userName: userName,
    password: password,
  };

  try {
    let response = await axios.post(`/api/users/login`, data);

    return response;
  } catch (err) {
    return err.response;
  }
};

const generateRpin = async (type) => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    let response = await axios.get(`/api/users/generate-rpin/${type}`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

const generateOrder = async ({ amt }) => {
  try {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    let response = await axios.post(
      `/api/cashfree/create-order`,
      { amt },
      config
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getAllRpins = async () => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    let response = await axios.get(`/api/users/get-all-rpin`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

const registerUser = async (data) => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    let response = await axios.post(`/api/users/register-user`, data, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

const getMyDownLines = async () => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    let response = await axios.get(`/api/users/get-my-downlines`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

const getUserProfile = async () => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    let response = await axios.get(`/api/users/get-user-info`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
const updateUserInfo = async (data) => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    let response = await axios.post(
      `/api/users/update-user-info`,
      data,
      config
    );
    return response;
  } catch (err) {
    return err.response;
  }
};

const registerVendor = async (data) => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    let response = await axios.post(`/api/users/register-vendor`, data, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

const addUser = async (data) => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    let response = await axios.post(`/api/users/add-user`, data, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
const getVendors = async () => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    let response = await axios.get(`/api/users/get-vendors`, config);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getUsers = async () => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    let response = await axios.get(`/api/users/get-users`, config);
    return response.data;
  } catch (err) {
    return err.response;
  }
};
const getUserBills = async () => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    let response = await axios.get(`/api/income/get-user-bills`, config);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const generateOrderToken = async (type) => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    let amount = 1550;
    if (type == 2) {
      amount = 1650;
    } else if (type == 3) {
      amount = 2100;
    }
    let response = await axios.get(`/api/paytm/checksum/${amount}`, config);
    return response.data;
  } catch (err) {
    return err.response;
  }
};
export {
  generateOrderToken,
  updateUserInfo,
  generateOrder,
  getUserBills,
  getUsers,
  getVendors,
  addUser,
  login,
  generateRpin,
  getAllRpins,
  registerUser,
  getMyDownLines,
  getUserProfile,
  registerVendor,
};
