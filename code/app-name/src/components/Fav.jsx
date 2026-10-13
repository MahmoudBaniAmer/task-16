import React from "react";

const Fav = ({ favorites, toggleFavorite }) => {
  return (
    <div>
      <h4>Favorites</h4>
      {favorites.length === 0 ? (
        <p>No favorites added yet</p>
      ) : (
        favorites.map((elem) => (
          <div key={elem.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h5>{elem.title}</h5>
            <p>Price: ${elem.price}</p>
            <button onClick={() => toggleFavorite(elem)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Fav;