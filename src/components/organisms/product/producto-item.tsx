import ActionButton from '../../atoms/action-button/action-button';
import Badge from '../../atoms/badge/badge';
import ProductImage from '../../atoms/product-image/product-image';
import './styles.css';
  
const ProductoItem = ({ id, name, price, background_image, platforms, onShowDetails, onAddToCart }) => {
    return (
      <div className="card" key={id}>
        <div className="image">
          <ProductImage src={background_image} name={name}/>
        </div>
        <div className="content">
          <p className='h5'>{name}</p>
          <p className='h5'>Precio: USD${price}</p>

          <div className="platforms">
            <p>Plataformas:
             {platforms.map((platform, index) => (
              <Badge name={platform.platform.name} key={index}/>
            ))}
            </p>
          </div>    
          <div className="action-buttons">
            <ActionButton name={"Añadir al carrito"} onClick={ () => onAddToCart(id) }/>
            <ActionButton name={"Ver detalles"} onClick={() => onShowDetails(id)}/>
          </div>
        </div>  
      </div>
    );
  };
export default ProductoItem;