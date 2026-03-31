import axios from 'axios';

const api = axios.create({
  baseURL: '[localhost](http://localhost:3001)', // adapte selon ton port backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// === PRODUITS ===
export const getProducts = () => api.get('/products');
export const getProduct = (id) => api.get(`/products/${id}`);
export const createProduct = (data) => api.post('/products', data);
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

// === COMMANDES ===
export const getOrders = () => api.get('/orders');
export const createOrder = (data) => api.post('/orders', data);

// === STOCK ===
export const getStockHistory = () => api.get('/stock/history');

export default api;
