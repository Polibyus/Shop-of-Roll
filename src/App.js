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

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path= "/" element={<ItemListContainer /> } />
      {/* <Route path="/items" element={} /> */}
      <Route path="/aboutus" element={<AboutUs /> } />
      <Route path="/itemdetail" element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
