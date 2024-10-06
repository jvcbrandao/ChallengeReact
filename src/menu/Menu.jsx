// src/menu/Menu.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import styles from './menu.module.css';

function Menu() {
    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link to="/">Amazon Garden</Link></li>
                <li><Link to="/items">Plants</Link></li>
                <li><Link to="/cart">Cart ({cartCount})</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;
