
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <>
    <CartProvider>
    <Navbar/>
    <Body/>
    </CartProvider>
    </>
  );
}

export default App;
