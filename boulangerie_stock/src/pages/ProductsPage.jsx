import { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../api';
import ProductList from '../components/products/ProductList';
import ProductForm from '../components/products/ProductForm';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Charger les produits
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Erreur lors du chargement des produits');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Créer ou modifier un produit
  const handleSubmit = async (productData) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, productData);
      } else {
        await createProduct(productData);
      }
      fetchProducts();
      setShowForm(false);
      setEditingProduct(null);
    } catch (err) {
      setError('Erreur lors de la sauvegarde');
      console.error(err);
    }
  };

  // Supprimer un produit
  const handleDelete = async (id) => {
    if (!window.confirm('Supprimer ce produit ?')) return;
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (err) {
      setError('Erreur lors de la suppression');
      console.error(err);
    }
  };

  // Ouvrir le formulaire en mode édition
  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  if (loading) return <div className="loading">Chargement...</div>;

  return (
    <div className="products-page">
      <header className="page-header">
        <h2>Gestion des Produits</h2>
        <button 
          className="btn btn-primary"
          onClick={() => { setShowForm(true); setEditingProduct(null); }}
        >
          + Nouveau produit
        </button>
      </header>

      {error && <div className="error-message">{error}</div>}

      {showForm && (
        <ProductForm
          product={editingProduct}
          onSubmit={handleSubmit}
          onCancel={() => { setShowForm(false); setEditingProduct(null); }}
        />
      )}

      <ProductList 
        products={products} 
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default ProductsPage;
