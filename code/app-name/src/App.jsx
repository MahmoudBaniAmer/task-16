import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import Fav from "./components/Fav";
import "./App.css";
const App = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("");
  const [favorites, setFavorites] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    setProducts(result);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterdProducts =
    category === "all"
      ? products
      : products.filter((elem) => elem.category === category);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItems = prevCart.filter((item) => item.id === product.id);

      if (existingItems.length > 0) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + amount;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      });
    });
  };

  const removeFromCart = (id) => {
    const updated = cart.filter((elem) => elem.id !== id);
    setCart(updated);
  };

  const toggleFavorite = (product) => {
    const isExist = favorites.find((item) => item.id === product.id);
    if (isExist) {
      setFavorites(favorites.filter((item) => item.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <div>
      <Nav setView={setView} />

      <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>

      {view === "cart" ? (
        <Cart 
          cart={cart} 
          removeFromCart={removeFromCart} 
          updateQuantity={updateQuantity} 
        />
      ) : view === "fav" ? (
        <Fav 
          favorites={favorites} 
          toggleFavorite={toggleFavorite} 
        />
      ) : (
        <ProductsList 
          products={filterdProducts} 
          addToCart={addToCart} 
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      )}
    </div>
  );
};

export default App;