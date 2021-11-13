const LOCAL_STORAGE_KEY = "order.data";

export function storeOrderData(order) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(order));
}

export function getOrderData() {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

export function removeOrderData() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
