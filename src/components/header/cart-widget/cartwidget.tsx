import { useState } from "react";
import CartItem from './cart-item/cartitem'

const CartWidget = () => {
    const [misProductos, setProductos] = useState([]);
    return (
        <li className="dropdown">
            <button className="btn button">
                <i className="fas fa-shopping-cart"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-right">
                <li>
                    <CartItem props={misProductos}/>
                </li>
            </ul>
        </li>
    )

}
export default CartWidget