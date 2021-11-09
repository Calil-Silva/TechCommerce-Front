import axios from "axios";
const URL = "http://localhost:4000";

// function setConfig(token) {
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// }

export function postLogin(userData) {
  return axios.post(`${URL}/signin`, userData);
}

export function postSignup(userData) {
  return axios.post(`${URL}/signup`, userData);
}
