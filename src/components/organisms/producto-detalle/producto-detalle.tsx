import ActionButton from '../../atoms/action-button/action-button';
import Badge from '../../atoms/badge/badge';
import Carousel from '../carousel/carousel';
import ProductImage from '../../atoms/product-image/product-image';
import './styles.css';

const ProductoDetalle = ({ id, name, background_image, platforms, screenshots, publishers, genres, released }) => {
  return (
    <div className="card-details" key={id}>
      <div className="col">
        <h2>{name}</h2>
      </div>
      <div className="row">
        <div className="col-6">
          <Carousel images={screenshots.map((screenshot) => screenshot.image)} />
        </div>
        <div className="col-6">
          <div className="details">
            <ProductImage src={background_image} name={name} />
            <div className="content-details">
              <p className="mb-0">Fecha de lanzamiento: {released}</p>
              <div className="platforms">
                <p className="mb-0">Plataformas:</p>
                <div className="d-flex flex-wrap">
                  {platforms.map((platform, index) => (
                    <Badge name={platform.platform.name} key={platform.platform.id}/>
                  ))}
                </div>
              </div>
              <div className="publisher">
                <p className="mb-0">Publicado por:</p>
                <div className="d-flex flex-wrap">
                  {publishers.map((publisher, index) => (
                    <Badge name={publisher.name} key={index}/>
                  ))}
                </div>
              </div>
              <div className="tags">
                <p className="mb-0">Tags:</p>
                <div className="d-flex flex-wrap">
                  {genres.map((genre, index) => (
                    <Badge name={genre.name} key={index}/>
                  ))}
                </div>
              </div>
              <div className="action-buttons">
                <ActionButton name="Añadir al carrito"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
