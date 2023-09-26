const ImageAtom = ( { src, alt } ) => {
    return (
        <div className="image">
            <img src={src} alt={alt} title={alt} />
        </div>
    )
}
export default ImageAtom;