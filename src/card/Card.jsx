// src/card/Card.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import plants from "../assets/plants.json";
import styles from "./card.module.css";
import place from "../assets/images/place.jpg";

function Card() {
    const { addToCart } = useContext(CartContext);

    return (
        <div className={styles.card}>
            {plants.map((plant) => (
                <div key={plant.id} className={styles.plantItem}>
                    <h2>{plant.name}</h2>
                    <img 
                        src={place} 
                        alt={plant.name}
                        className={styles.plantStyle}
                    />
                    <p>Price U$ {plant.price.toFixed(2)}</p>
                    <p>{plant.description}</p>
                    <button onClick={() => addToCart(plant)}>Add to cart</button>
                </div>
            ))}
        </div>
    );
}

export default Card;
