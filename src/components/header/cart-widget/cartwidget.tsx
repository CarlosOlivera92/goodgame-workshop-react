import { useState } from "react";
import CartItem from './cart-item/cartitem'

const CartWidget = () => {
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
export default CartWidget