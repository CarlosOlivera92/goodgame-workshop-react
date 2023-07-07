import './styles.css';
  
const ProductoItem = ({ id, name, image, platforms }) => {
    return (
      <div className="card" key={id}>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <p className='h5'>{name}</p>
          <div className="platforms">
            <p>Plataformas:
             {platforms.map((platform, index) => (
              <span className='platforms' key={index}> {platform.platform.name} |  </span>
            ))}
            </p>
          </div>    
          <div className="action-buttons">
            <button className='btn button'>Añadir al carrito</button>
            <button className='btn button'>Ver dettales</button>
          </div>
        </div>
      </div>
    );
  };
export default ProductoItem;