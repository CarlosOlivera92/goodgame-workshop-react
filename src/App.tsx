import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './components/organisms/header/header';
import Footer from './components/organisms/footer/footer';
import ProductoDetalles from './pages/producto-detalles/producto-detalles';
import Productos from './pages/productos/productos';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path='/productos/:productId' element={<ProductoDetalles />} />
        <Route path="/productos" element={<Productos/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;