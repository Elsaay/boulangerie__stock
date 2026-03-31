function ProductCard({ product, onEdit, onDelete }) {
  const stockStatus = product.stock === 0 
    ? 'out-of-stock' 
    : product.stock < 10 
      ? 'low-stock' 
      : 'in-stock';

  return (
    <div className={`product-card ${stockStatus}`}>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">{product.price.toFixed(2)} €</p>
        <p className={`stock ${stockStatus}`}>
          Stock: {product.stock}
          {product.stock < 10 && product.stock > 0 && ' ⚠️'}
          {product.stock === 0 && ' ❌'}
        </p>
        <span className={`badge ${product.available ? 'available' : 'unavailable'}`}>
          {product.available ? 'Disponible' : 'Indisponible'}
        </span>
      </div>
      
      <div className="product-actions">
        <button className="btn btn-secondary" onClick={onEdit}>
          Modifier
        </button>
        <button className="btn btn-danger" onClick={onDelete}>
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
