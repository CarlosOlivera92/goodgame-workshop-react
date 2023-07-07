import React, { useEffect, useState } from "react";
import CartItem from "../../atoms/cart-item/cartitem";

const CartWidget = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [misProductos, setProductos] = useState([]);

    useEffect(() => {
        const handleDropdownLeave = () => {
            setIsExpanded(false);
        };

        const dropdown = document.querySelector('.dropdown');
        dropdown.addEventListener('mouseleave', handleDropdownLeave);

        return () => {
            dropdown.removeEventListener('mouseleave', handleDropdownLeave);
        };
    }, []);

    const handleDropdownHover = () => {
        setIsExpanded(true);
    };

    return (
        <div className="dropdown">
            <div className="button-container">
                <button className={`btn button ${isExpanded ? 'hovered' : 'nothovered'} `} onMouseEnter={handleDropdownHover}>
                    <i className="fas fa-shopping-cart"></i>
                </button>
            </div>
            <div className={`dropdown-menu dropdown-menu-right ${isExpanded ? 'expanded' : 'contracted'}`}>
                <CartItem props={misProductos}/>
            </div>
        </div>
    );
};

export default CartWidget;
