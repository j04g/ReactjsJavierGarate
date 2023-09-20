import React, { useState } from 'react';
import '../styles/ItemCount.css';

const ItemCount = ({ stock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="stock-indicator">
        {stock > 0 ? `Stock disponible: ${stock}` : "No hay disponibilidad"}
      </div>
      <div className="counter">
        <button className="button" onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button className="button" onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
}
export default ItemCount;
