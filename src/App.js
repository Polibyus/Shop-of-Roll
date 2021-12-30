// Css
import './App.css';
// Librerias
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Componentes
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import AboutUs from './components/AboutUs';
import ItemListContainer from './components/ItemListContainer';
import Carrito from './components/Carrito'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path= "/" element={<ItemListContainer />} />
      <Route path="/:cat" element={<ItemListContainer />} />
      <Route path="/Conocenos" element={<AboutUs /> } />
      <Route path="/:cat/:itemID" element={<ItemDetailContainer />} />
      <Route path="/:cat/:itemID" element={<ItemDetailContainer />} />
      <Route path="/carrito" element={<Carrito />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
