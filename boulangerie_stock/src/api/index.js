import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' },
});

// === PRODUITS ===
export const getProducts = () => api.get('/products');
export const createProduct = (data) => api.post('/products', data);
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

// === COMMANDES ===
export const getOrders = () => api.get('/orders');
export const createOrder = (data) => api.post('/orders', data);

// === BILAN DE LA JOURNÉE ===
export const recordDailyReport = (items) => api.post('/stock-usage', items);

export default api;
