import React from "react";

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
    return (
        <div>
            <h4>Cart</h4>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.map((elem) => (
                    <div
                        key={elem.id}
                        style={{
                            border: "1px solid #070707",
                            margin: "10px",
                            padding: "10px",
                        }}
                    >
                        <h5>{elem.title}</h5>
                        <p>Price: ${elem.price}</p>

                        <button onClick={() => updateQuantity(elem.id, -1)}>-</button>
                        <span> {elem.quantity} </span>
                        <button onClick={() => updateQuantity(elem.id, 1)}>+</button>

                        <p>Total: ${elem.price * elem.quantity}</p>

                        <button onClick={() => removeFromCart(elem.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
