import React, { useState } from 'react';
import '../styles/Card.css';


const Card = ({ producto, onAddToCart }) => {
  const { id, nombre, categoria, precio, stock, descripcion, img } = producto;
  const [showDescription, setShowDescription] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(producto, quantity);
      setQuantity(0); // Reset the quantity after adding to cart
    }
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt={nombre} className="product-image" />
      </div>
      <div className="card-content">
        <h2 className="title">{nombre}</h2>
        <p className="category">{categoria}</p>
        <p className="price">${precio}</p>
        <p className="stock">Stock: {stock}</p>
        {showDescription && <p className="description">{descripcion}</p>}
        <button onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? "Ocultar detalle" : "Ver detalle"}
        </button>
        <div className="counter">
          <button className="button" onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button className="button" onClick={handleIncrease}>+</button>
        </div>
        <button className="button2" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Card;
