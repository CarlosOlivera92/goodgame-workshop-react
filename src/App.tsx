import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './components/organisms/header/header';
import Footer from './components/organisms/footer/footer';
import ProductoDetalles from './pages/producto-detalles/producto-detalles';
import Productos from './pages/productos/productos';
import { CartProvider } from './utils/context/cart-context';
import Checkout from './pages/checkout/checkout';
import AboutUs from './pages/about/about';


function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path='/productos/:productId' element={<ProductoDetalles />} />
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path='/nosotros' element={<AboutUs/>}/>
          </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
}

export default App;