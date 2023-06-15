const CartItem = ({props}) => {
    if (props.length === 0) {
        return (
            <p className="cart-title">Productos en el carrito: {props.length}</p>
        )
    } else {
        return (
            <div className='cart-items' id='cart-items'>
                <div className='cart-item'>
                    <div className='image'>
                        <img src="" alt="" />
                    </div>
                    <div className="content">
                        <p>Producto Precio</p>
                        <p>Producto {props} </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;