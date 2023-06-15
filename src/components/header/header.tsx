import './header.css'
import { useState } from 'react';
import NavBar from './navbar/navbar';


const CartItems = () => {
    const [misProductos, setProductos] = useState([]);
    if (misProductos.length === 0) {
        return (
            <p className="cart-title">Productos en el carrito: {misProductos.length}</p>
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
            <NavBar/>
        </header>
    );
};
export default Header;
