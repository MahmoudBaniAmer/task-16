import React from 'react';

const Nav = ({ setView }) => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", background: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <h2 style={{ cursor: "pointer", margin: 0 }} onClick={() => setView("")}>
                JUST Store
            </h2>

            <div className="navdiv" style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => setView("")}>Products</button>
                <button onClick={() => setView("cart")}>🛒</button>
                <button onClick={() => setView("fav")}>❤️</button>
            </div>
        </nav>
    );
};

export default Nav;