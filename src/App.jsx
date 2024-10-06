import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landpage from './landpage/Landpage'; 
import Items from './items/Items';
import CartPage from './cart/CartPage';  // Certifique-se de importar CartPage corretamente
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/items" element={<Items />} />
          <Route path="/cart" element={<CartPage />} /> {/* Adicione a rota do carrinho */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
