import { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../api';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', image: '', stock: 0 });
  const [editing, setEditing] = useState(null);

  const load = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  useEffect(() => { load(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await updateProduct(editing.id, newProduct);
    } else {
      await createProduct(newProduct);
    }
    setNewProduct({ name: '', image: '', stock: 0 });
    setEditing(null);
    load();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Supprimer ce produit ?')) {
      await deleteProduct(id);
      load();
    }
  };

  const startEdit = (p) => {
    setEditing(p);
    setNewProduct({ name: p.name, image: p.image, stock: p.stock });
  };

  return (
    <div>
      <h2>Produits</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nom" value={newProduct.name} 
          onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}/>
        <input placeholder="Image URL" value={newProduct.image}
          onChange={e => setNewProduct({ ...newProduct, image: e.target.value })}/>
        <input type="number" placeholder="Stock" value={newProduct.stock}
          onChange={e => setNewProduct({ ...newProduct, stock: Number(e.target.value) })}/>
        <button type="submit">{editing ? "Modifier" : "Ajouter"}</button>
        {editing && <button type="button" onClick={() => setEditing(null)}>Annuler</button>}
      </form>

      <ul>
        {products.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> — {p.stock} en stock
            <button onClick={() => startEdit(p)}>✏️</button>
            <button onClick={() => handleDelete(p.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
