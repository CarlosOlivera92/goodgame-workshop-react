import { useContext } from 'react';
import CartContext from '../../../utils/context/cart-context';
import ActionButton from '../action-button/action-button';

import './style.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import BuyInfo from '../buy-info/buyinfo';

const CartItem = ({ props }) => {
    const { removeFromCart } = useContext(CartContext);
    const handleRemoveFromCart = (productId) => {
        let [selectedProduct] = props.filter((product) => product.id === productId);
        toast.success(`${selectedProduct.name} ha sido eliminado del carrito`);
        removeFromCart(productId); 
    };

  return (
        <div className="cart-items">
            {props.length === 0 ? (
                <p className="text-center">No hay productos en el carrito</p>
            ) : (
                <>
                    {props.map((producto, index) => (
                        <div className="cart-item d-flex flex-row my-3" key={index}>
                            <div className="image">
                                <img src={producto.background_image} alt=""/>
                            </div>
                            <div className="content">
                                <p>{producto.name}</p>
                                <p>Precio USD${producto.price}</p>

                                <ActionButton
                                    type={"button"}
                                    name={"Eliminar del carrito"}
                                    onClick={() => handleRemoveFromCart(producto.id)}
                                    classname={"delBtn"}
                                />
                            </div>
                        </div>
                    ))}
                    <ToastContainer theme="dark" />

                </>
            )}
        </div>
  );
};

export default CartItem;
