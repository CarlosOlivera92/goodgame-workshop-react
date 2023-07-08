const ProductImage = ({ src, name }) => {
    return (
      <div className="detail-image">
        <img src={src} alt={name} className="img-fluid" />
      </div>
    );
};
export default ProductImage;