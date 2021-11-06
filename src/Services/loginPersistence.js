const LOCAL_STORAGE_KEY = "loggedUser.data";

export function storeUserDAta(user) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export function getUserData() {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (data) {
    return JSON.parse(data);
  } else {
    return undefined;
  }
}

export function removeUserData() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
