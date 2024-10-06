// src/cart/CartPage.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import styles from "./CartPage.module.css";

function CartPage() {
    const { cartItems } = useContext(CartContext);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className={styles.cartPage}>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                        <h2>{item.name}</h2>
                        <img src={item.image} alt={item.name} />
                        <p>Price: U$ {item.price.toFixed(2)}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Subtotal: U$ {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))
            )}
            <h2>Total: U$ {calculateTotal()}</h2>
            <button className={styles.checkoutBtn}>Checkout</button>
        </div>
    );
}

export default CartPage;
