import './header.css'
import { useState } from 'react';


const CartItems = () => {
    const [misProductos, setProductos] = useState([]);
    if (misProductos.length === 0) {
        return (
            <p className="cart-title">No hay productos en el carrito</p>
        )
    } else {
        return (
            <div className='cart-items' id='cart-items'>
                <CartItem props={misProductos} />
            </div>
        )
    }
}

const CartItem = ({props}) => {
    return (
        <div className='cart-item'>
            <div className='image'>
                <img src="" alt="" />
            </div>
            <div className="content">
                <p>Producto Precio</p>
                <p>Producto {props} </p>
            </div>
        </div>
    )
}


const Header = () => {
    return (
        <header className='header d-flex flex-row justify-content-between'>
            <div className="logo">
                <img src="../src/assets/logo-2.png" alt="" />
            </div>
            <nav className="navbar">
                <ul className='nav-items list-unstyled list-inline'>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Productos</a></li>
                    <li><a href="/">Nosotros</a></li>
                    <li><a href="/">Contacto</a></li>
                    <li className="dropdown">
                        <button className="btn button">
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li>
                                <CartItems />
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
