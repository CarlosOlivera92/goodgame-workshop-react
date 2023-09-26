import ImageAtom from "../../atoms/image/image";

const CardHeader = ( { imgSrc, alt } ) => {
    return (
        <div className="card-header">
            <ImageAtom src={imgSrc} alt={alt}/>
        </div>
    )
}
export default CardHeader;