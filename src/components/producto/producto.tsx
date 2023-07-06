import React from 'react';
import './styles.css';
  
const ProductoItem = ({ id, name, image }) => {
    return (
      <div className="card" key={id}>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <p>{name}</p>
          {/* Otras propiedades del producto */}
        </div>
      </div>
    );
  };
export default ProductoItem;