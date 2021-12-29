import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path= "/" element={<Home />} />
      <Route path="/items" element={<ItemListContainer /> } />
      <Route path="/aboutus" element={<AboutUs /> } />
      <Route path="/itemdetail" element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
