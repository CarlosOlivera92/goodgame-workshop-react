import Producto from "../../../../classes/producto";

interface CartItemProps {
    props: Producto[];
}

const CartItem = ({ props }: CartItemProps) => {
    if (props.length === 0) {
        return (
            <p className="cart-title">Productos en el carrito: {props.length}</p>
        )
    } else {
        return (
            <div className='cart-items' id='cart-items'>
                {props.map((producto, index) => (
                    <div className='cart-item' key={index}>
                        <div className='image'>
                            <img src={producto.getImagen()} alt="" />
                        </div>
                        <div className="content">
                            <p>Precio: {producto.getPrecio()}</p>
                            <p>Producto: {producto.getNombre()} </p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default CartItem;