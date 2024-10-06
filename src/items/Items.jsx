import styles from './items.module.css';
import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import Card from '../card/Card';

function Items() {
    return (
        <>
            <Menu />
            <div className={styles.container}>
                <Card />
                
            </div>
        </>
    );
}

export default Items;
