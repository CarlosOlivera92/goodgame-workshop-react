const CheckoutSection = ( {title, data} ) => {
    return(
        <section className="col-12 col-md-3">
            <h4>{title}</h4>
            {data.map( (item, index) => (
               <p key={index}>{item}</p>
            ))}
        </section>
    )
}
export default CheckoutSection;