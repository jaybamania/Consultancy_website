import axios from "axios";

export const LOGIN_URL = "/api/auth/login";
export const REGISTER_URL = "/api/auth/register";

const BASE_URL = "https://service-portal-api.herokuapp.com/api/";

/*
  NEW_LOGIN_URL and NEW_REGISTE_URL have been created only to avoid tampering with LOGIN_URL and
  REGISTER_URL, as they have been exported and are potentially used elsewhere.
*/
const NEW_LOGIN_URL = BASE_URL + "auth/login";
const NEW_REGISTER_URL = BASE_URL + "auth/signup";

export function login(email, password) {
  //console.log('making axios request');
  return axios.post(NEW_LOGIN_URL, { email: email, password: password });
}
export function register(data) {
  console.log({ ...data, phone: "", name: "" });
  console.log(NEW_REGISTER_URL);
  return axios.post(NEW_REGISTER_URL, { ...data, phone: null, name: null });
}
export const getUserDetails = async () => {
  const bearer = "Bearer " + localStorage.getItem("TOKEN");
  const response = await axios.get(BASE_URL + "auth/my-profile/", {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};
export const updateUserDetails = async (profile) => {
  const bearer = "Bearer " + localStorage.getItem("TOKEN");
  const response = await axios.post(
    BASE_URL + "auth/update-profile/",
    profile,
    {
      headers: {
        Authorization: bearer,
      },
    }
  );
  return response.data;
};
export const changeUserPassword = async (passwords) => {
  const bearer = "Bearer " + localStorage.getItem("TOKEN");
  const response = await axios.post(
    BASE_URL + "auth/change-password/",
    passwords,
    {
      headers: {
        Authorization: bearer,
      },
    }
  );
  return response.data;
};
