import React from "react";

const ProductCard = ({ product, addToCart, toggleFavorite, favorites }) => {
  const isFav = favorites?.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <h6>{product.price} $</h6>

      <div className="card-buttons">
        <button onClick={() => addToCart(product)}>cart</button>
        <button onClick={() => toggleFavorite(product)}>
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;