import { useContext, useEffect, useState } from "react";
import { useApi } from "../../../utils/api/useApi";
import { API_URL } from "../../../utils/constants/endpoints";
import ProductoItem from "../product/producto-item";
import './style.css';
import { ColorRing } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import CategoryContext from "../../../utils/context/filter-context";
import CartContext from "../../../utils/context/cart-context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "../card/card";

const ItemListContainer = () => {
  const navigate = useNavigate();
  const { selectedCategories } = useContext(CategoryContext);
  const { cart, setCart } = useContext(CartContext); 
  const { data: products, loading: loadingProducts, error: errorResponse } = useApi({
    apiEndpoint: API_URL.RawgApi.urlGames('page=1'),
    httpVerb: API_URL.RawgApi.config,
  });

  const [productsList, setProductsList] = useState([]);
  const getRandomPrice = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  useEffect(() => {
    if (products && Array.isArray(products.results)) {
      if (selectedCategories.length > 0) {
        const filteredProducts = products.results.filter((product) =>
          product.parent_platforms.some((platform) =>
            selectedCategories.includes(platform.platform.id.toString())
          )
        );
        // Add prices to the filtered products within the range of 14 to 100
        const productsWithPrices = filteredProducts.map((product) => ({
          ...product,
          Price: getRandomPrice(14, 100),
        }));
        setProductsList(productsWithPrices);
      } else {
        // Add prices to all products within the range of 14 to 100
        const productsWithPrices = products.results.map((product) => ({
          ...product,
          price: getRandomPrice(14, 100),
        }));
        setProductsList(productsWithPrices);
      }
    }
  }, [products, selectedCategories]);
  const onShowDetails = (id) => {
    navigate(`/productos/${id}`)
  }
  const addToCart = (id) => {
    const productToAdd = productsList.find((product) => product.id === id);
    const existsInCart = cart.find( (product) => product.id === id );
    if (productToAdd) {
      if (existsInCart) {
        toast.error("Solamente puedes añadir una unidad del mismo producto")
      } else {
        setCart([...cart, productToAdd]);
        toast.success(`${productToAdd.name} ha sido agregado al carrito`)
      }
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      {loadingProducts ? (
        <div className="loader-container">
          <ColorRing
            visible={true}
            height="120"
            width="120"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      ) : errorResponse ? (
        <p>Error: {errorResponse.message}</p>
      ) : (
        <>
          {productsList.length > 0 ? (
            <div className="card-container row row-cols-1 row-cols-md-3 row-cols-xl-4 gap-3 p-3 align-items-center justify-content-center">
              {productsList.map((product) => (
                <div className="col w-auto" key={product.id}>
                  <Card title={product.name} imgSrc={product.background_image} alt={product.name} products={product} buttons={[
                  {
                    id:product.id,
                    name: "Agregar al carrito",
                    onClick: () => addToCart(product.id), // Invoca addToCart con el id
                    type: "button",
                    classname: "btn-success",
                    disabled: false
                  },
                  {
                    id:product.id,
                    name: "Mostrar detalles",
                    onClick: () => onShowDetails(product.id), // Invoca onShowDetails con el id
                    type: "button",
                    classname: "button",
                    disabled: false
                  }
                ]} key={product.id}/>
                </div>
              ))}
              <ToastContainer theme="dark" />
            </div>
          ) : (
            <p>Cargando productos...</p>
          )}
        </>
      )}
    </div>
  );
};

export default ItemListContainer;