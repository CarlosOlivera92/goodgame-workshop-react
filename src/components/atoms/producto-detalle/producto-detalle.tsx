import Carousel from '../../organisms/carousel/carousel';
import './styles.css';

const ProductoDetalle = ({ id, name, background_image, platforms, screenshots }) => {
  return (
    <div className="card-details" key={id}>
      <div className="col">
        <h2 className="">{name}</h2>
      </div>
      <div className="row">
        <div className="col-6">
          <Carousel images={screenshots.map((screenshot) => screenshot.image)} />
        </div>
        <div className="col-6">
          <div className="details">
            <div className="detail-image">
              <img src={background_image} alt="" className="img-fluid" />
            </div>
            <div className="content-details">
              <div className="platforms">
                <p className="mb-0">Plataformas:</p>
                <div className="d-flex flex-wrap">
                  {platforms.map((platform, index) => (
                    <span className="badge me-2 mb-2" key={index}>
                      {platform.platform.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="action-buttons">
                <button className="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
