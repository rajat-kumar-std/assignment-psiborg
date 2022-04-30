import React from 'react';
import './product.card.css';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { AiOutlineMinusCircle } from 'react-icons/ai';

const ProductCard = ({ product, deleteProd, incrProd, decrProd }) => {
  const decrHandler = (prod) => {
    if (prod.quantity > 1) {
      decrProd(prod.pid);
      return;
    }
    deleteProd(prod.pid);
  };

  return (
    <div className="product-container">
      <div className="img-quant-sec">
        <img src={product.img} className="p-img" alt="" />

        <div className="counter-box">
          <AiOutlineMinusCircle
            onClick={() => decrHandler(product)}
            className="btn"
          />
          {product.quantity}
          <IoIosAddCircleOutline
            onClick={() => incrProd(product.pid)}
            className="btn"
          />
        </div>
      </div>
      <div className="p-details-sec">
        <div className="p-title">{product.name}</div>
        <div className="p-price">{`₹${product.price * product.quantity}`}</div>
        <div className="p-color">
          <span>Color: </span>Brown
        </div>
        <div className="in-stock">In Stock</div>
        <div className="delete-more-sec">
          <button
            className="delete-btn"
            onClick={() => deleteProd(product.pid)}
          >
            Delete
          </button>
          <button className="more-btn">See more like this</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
