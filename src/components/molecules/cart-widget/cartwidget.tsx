import React, { useContext, useEffect, useState } from "react";
import CartItem from "../../atoms/cart-item/cartitem";
import CartContext from "../../../utils/context/cart-context";
import BuyInfo from "../../atoms/buy-info/buyinfo";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const handleDropdownLeave = () => {
      setIsExpanded(false);
    };

    const dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("mouseleave", handleDropdownLeave);

    return () => {
      dropdown.removeEventListener("mouseleave", handleDropdownLeave);
    };
  }, []);

  useEffect(() => {
    const calculatedTotal = cart.reduce((accumulator, item) => {
      if (item.price) {
        return accumulator + item.price;
      }
      return accumulator;
    }, 0);
    
    setTotal(calculatedTotal);
  }, [cart]);

  const handleDropdownHover = () => {
    setIsExpanded(true);
  };
  const handleButtonNavigation = () => {
    navigate('/checkout'); // Navega a la página de checkout
  };
  return (
    <div className="dropdown">
      <div className="button-container">
        <button
          className={`btn button ${isExpanded ? "hovered" : "nothovered"} `}
          onMouseEnter={handleDropdownHover}
        >
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
      <div className={`dropdown-menu dropdown-menu-right ${isExpanded ? "expanded" : "contracted"}`}>
        <CartItem props={cart} total={total} />
        <BuyInfo total={total} onClick={handleButtonNavigation} />
      </div>
    </div>
  );
};

export default CartWidget;
