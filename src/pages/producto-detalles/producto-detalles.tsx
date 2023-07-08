import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../utils/constants/endpoints";
import { useApi } from "../../utils/api/useApi";
import ProductoDetalle from "../../components/atoms/producto-detalle/producto-detalle";
import { useEffect, useState } from "react";

const ProductoDetalles = () => {
    const { productId } = useParams();
    const { data: product, loading: loadingProducts, error: errorResponse } = useApi({
      apiEndpoint: API_URL.RawgApi.urlSpecificGame(productId),
      httpVerb: API_URL.RawgApi.config,
    });
    const { data: screenshots, loading: loadingScreenshots, error: errorData } = useApi({
        apiEndpoint: API_URL.RawgApi.urlSpecificGame( `${productId}/screenshots`),
        httpVerb: API_URL.RawgApi.config,
      });
  

  
    // Esperar a que los datos estén disponibles
    if (loadingProducts) {
      return <p>Cargando...</p>;
    }
  
    // Manejar errores
    if (errorResponse) {
      return <p>Error: {errorResponse.message}</p>;
    }
  
    // Acceder a los datos cuando estén disponibles
    return (
      <div className="detall container p-4">
        {product && <ProductoDetalle {...product} screenshots={screenshots?.results}  />}
      </div>
    );
};
  
export default ProductoDetalles;