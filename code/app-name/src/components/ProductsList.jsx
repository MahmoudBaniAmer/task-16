import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ products, addToCart, toggleFavorite, favorites }) => {
    return (
        <div>
            <div>ProductsList</div>

            <div className="products-grid">
                {products.map((product) => {
                    return (
                        <ProductCard
                            product={product}
                            key={product.id}
                            addToCart={addToCart}
                            toggleFavorite={toggleFavorite}
                            favorites={favorites}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProductsList;
