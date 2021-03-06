// Css
import './App.css';
// Librerias
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Componentes
import NavBar from './components/Navbar/NavBar';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import AboutUs from './components/Navbar/AboutUs';
import ItemListContainer from './components/Items/ItemListContainer';
import SendOrder from './components/Order/SendOrder';
import Cart from './components/Navbar/Cart';

function App() {
  return (
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= "/" element={<ItemListContainer />} />
        <Route path="/:cat" element={<ItemListContainer />} />
        <Route path="/:cat/:itemID" element={<ItemDetailContainer />} />
        <Route path="/aboutus" element={<AboutUs /> } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/finish" element={<SendOrder />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
