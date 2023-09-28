import { useContext } from 'react';
import CartContext from '../../../utils/context/cart-context';
import ActionButton from '../action-button/action-button';
import { ToastContainer, toast } from 'react-toastify';
import './style.css';

const CartItem = ({props, total}) => {
    
    const { removeFromCart }:any = useContext(CartContext);
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
                                    disabled={false}
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
