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

export default CartItem;