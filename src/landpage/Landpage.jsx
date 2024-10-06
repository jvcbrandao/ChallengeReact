import styles from './landpage.module.css';
import { Link } from 'react-router-dom';

function Landpage() {
    return (
            <div className={`${styles.container}`}>

                <div className={styles.gettingStarted}>
                    <h1>Welcome to Amazon Garden</h1>
                    <hr />
                    <Link to='/items'>
                        <button className={styles.btnGetStarted}>Get Started</button>
                    </Link>
                </div>
                <div className={styles.description}>
                    <h2>Welcome to Amazon Garden</h2>

                    <p>Discover the vibrant beauty of Brazilian house plants, handpicked to bring a touch of the rainforest into your home. At Amazon Garden, we specialize in rare and exotic plants known for their air-purifying qualities and unique aesthetics. Whether you are a seasoned plant lover or just starting your green journey, our carefully curated selection offers something for everyone.</p>

                    <p>Explore the magic of the Amazon with our collection and transform your living space into a lush, tropical paradise.</p>

                    <p>Ready to green your space? Get started now!</p>
                </div>
            </div>
    )
}

export default Landpage;
