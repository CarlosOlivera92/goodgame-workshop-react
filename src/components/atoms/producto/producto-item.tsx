import './styles.css';
  
const ProductoItem = ({ id, name, background_image, platforms, onShowDetails }) => {
    return (
      <div className="card" key={id}>
        <div className="image">
          <img src={background_image} alt={name}/>
        </div>
        <div className="content">
          <p className='h5'>{name}</p>
          <div className="platforms">
            <p>Plataformas:
             {platforms.map((platform, index) => (
              <span className='platforms' key={index}> {platform.platform.name} |   </span>
            ))}
            </p>
          </div>    
          <div className="action-buttons">
            <button className='btn button'>Añadir al carrito</button>
            <button className='btn button' onClick={() => onShowDetails(id)}>Ver dettales</button>
          </div>
        </div>
      </div>
    );
  };
export default ProductoItem;