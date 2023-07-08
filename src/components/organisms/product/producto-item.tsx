import ActionButton from '../../atoms/action-button/action-button';
import Badge from '../../atoms/badge/badge';
import ProductImage from '../../atoms/product-image/product-image';
import './styles.css';
  
const ProductoItem = ({ id, name, background_image, platforms, onShowDetails }) => {
    return (
      <div className="card" key={id}>
        <div className="image">
          <ProductImage src={background_image} name={name}/>
        </div>
        <div className="content">
          <p className='h5'>{name}</p>
          <div className="platforms">
            <p>Plataformas:
             {platforms.map((platform, index) => (
              <Badge name={platform.platform.name} key={index}/>
            ))}
            </p>
          </div>    
          <div className="action-buttons">
            <ActionButton name={"Añadir al carrito"}/>
            <ActionButton name={"Ver detalles"} onClick={() => onShowDetails(id)}/>
          </div>
        </div>  
      </div>
    );
  };
export default ProductoItem;