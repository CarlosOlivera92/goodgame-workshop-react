import CardBody from "../../molecules/card-body/card-body";
import CardFooter from "../../molecules/card-footer/card-footer";
import CardHeader from "../../molecules/card-header/card-header";
import './styles.css';

const Card = ( {title, imgSrc, alt,  text, buttons, products} ) => {
    return (
        <div className="card">
            <CardHeader imgSrc={imgSrc} alt={alt}/>
            <CardBody title={title} text={text} product={products}/>
            <CardFooter buttons={buttons}/>
        </div>
    )
}
export default Card;