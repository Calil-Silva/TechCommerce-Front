import axios from "axios";
const URL = "https://git.heroku.com/techcommerce-appweb.git";

function returnCategoryID(categoryName) {
  const ids = {
    Watch: 1,
    AirPods: 2,
    Mac: 3,
    mac: 3,
    MacBook: 3,
    iPad: 4,
    Ipad: 4,
    iPhone: 5,
    Iphone: 5,
    Acessórios: 6,
    Acessories: 6,
  };
  return ids[`${categoryName}`];
}
export function postLogin(userData) {
  return axios.post(`${URL}/signin`, userData);
}

export function postSignup(userData) {
  return axios.post(`${URL}/signup`, userData);
}
export function getCategoriesListRequest() {
  return axios.get(`${URL}/categories`);
}

export function getProductsCategoryRequest(categoryName) {
  return axios.get(
    `${URL}/products/?categoryID=${returnCategoryID(categoryName)}`
  );
}

export function putProducts(order) {
  return axios.put(`${URL}/checkout`, order);
}
