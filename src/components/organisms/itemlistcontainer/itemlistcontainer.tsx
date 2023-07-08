import { useEffect, useState } from "react";
import { useApi } from "../../../utils/api/useApi";
import { API_URL } from "../../../utils/constants/endpoints";
import ProductoItem from "../product/producto-item";
import './style.css';
import { ColorRing } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";

const ItemListContainer = () => {
  const navigate = useNavigate();
  const { data: products, loading: loadingProducts, error: errorResponse } = useApi({
    apiEndpoint: API_URL.RawgApi.urlGames('page=1'),
    httpVerb: API_URL.RawgApi.config,
  });
    const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    if (products && Array.isArray(products.results)) {
      setProductsList(products.results);
      console.log(products.results);
    }
  }, [products]);
  const onShowDetails = (id) => {
    navigate(`/products/${id}`)
}
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
                  <ProductoItem key={product.id} {...product} onShowDetails={onShowDetails} />
                </div>
              ))}
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