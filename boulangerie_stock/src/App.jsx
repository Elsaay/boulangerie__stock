import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';
import StockPage from './pages/StockPage';
import './styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="sidebar">
          <h1>🥐 BakeryStock</h1>
          <ul>
            <li><NavLink to="/">Tableau de bord</NavLink></li>
            <li><NavLink to="/products">Produits</NavLink></li>
            <li><NavLink to="/orders">Commandes</NavLink></li>
            <li><NavLink to="/stock">Stock</NavLink></li>
          </ul>
        </nav>
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/stock" element={<StockPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
