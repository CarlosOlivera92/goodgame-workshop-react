import { useEffect, useState } from "react";
import CartItem from './cart-item/cartitem'
import Producto from "../../../classes/producto";

const CartWidget = () => {
    const producto1 = new Producto("GTAV", 200);
    const producto2 = new Producto("TLOU", 100);
    const producto3 = new Producto("RDR2", 200);
    const producto4 = new Producto("WRC20", 400);

    const [misProductos, setProductos] = useState<Array<Producto>>([]);
    useEffect(() => {
        setProductos([...misProductos, producto1]);
    }, []); 
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