import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Cart from './components/Cart/Cart';
import Kermit from './components/Kermit/Kermit';
import Navbar from './components/Navbar/Navbar';
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleOpenCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <Navbar handleOpenNav={handleOpenCart} />
      <Cart isOpen={isCartOpen} handleIsOpen={handleOpenCart}/>
      <Kermit />
      <Cards />
    </>
  );
}

export default App;