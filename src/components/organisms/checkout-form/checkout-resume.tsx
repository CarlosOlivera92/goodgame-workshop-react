import ActionButton from "../../atoms/action-button/action-button";
import './styles.css';

const CheckoutResume = ({ bill, onSubmit }) => {
  return (
    <article className="checkout-resume d-flex flex-column justify-content-center">
      <header className="checkout-header">
        <h3>Paso 3: Vista previa de su facturación</h3>
      </header>
      <main className="checkout-main">
        <div className="row">
          <section className="col-12 col-md-3">
            <h4>Datos de la factura:</h4>
            <p>Numero de factura: {bill.billNumber}</p>
            <p>Fecha de emisión: {bill.date}</p>
          </section>
          <section className="col-12 col-md-3">
            <h4>Sus datos:</h4>
            <p>Nombre: {bill.customer.name}</p>
            <p>Email: {bill.customer.emailAddress}</p>
            <p>Numero de teléfono: {bill.customer.phoneNumber}</p>
            <p>Dirección: {bill.customer.address}</p>
          </section>
          <section className="col-12 col-md-3">
            <h4>Datos del producto:</h4>
            {bill.cart.length > 0 ? (
              bill.cart.map((product, index) => (
                <p key={index}>
                  {product.name} | Precio: USD${product.price}
                </p>
              ))
            ) : (
              <p>No hay productos en el carrito.</p>
            )}
          </section>
          <section className="col-12 col-md-3">
            <h4>Datos de la tarjeta:</h4>
            <p>Tarjeta de crédito: {bill.creditCard.number}</p>
            <p>Banco: {bill.creditCard.bank}</p>
            <p>Titular: {bill.customer.name}</p>
          </section>
        </div>
        <div className="resume mt-3">
        </div>
      </main>
      <footer className="checkout-footer">
        <p className="total-resume">Total: USD${bill.total}</p>
        <div className="action-buttons">
          <ActionButton
            name={"Confirmar Compra"}
            type={"submit"}
            classname={"btn btn-success"}
            disabled={false}
          />
        </div>
      </footer>
    </article>
  );
};

export default CheckoutResume;
