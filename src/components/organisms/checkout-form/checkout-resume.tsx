import CheckoutFooter from "../../molecules/checkout-footer/checkout-footer";
import CheckoutHeader from "../../molecules/checkout-header/checkout-header";
import CheckoutSection from "../../molecules/checkout-section/checkout-section";
import './styles.css';

const CheckoutResume = ({ bill, onSubmit }) => {
  return (
    <article className="checkout-resume d-flex flex-column justify-content-center">
      <CheckoutHeader/>
      <main className="checkout-main">
        <div className="row">
            <CheckoutSection title="Datos de la factura:" data={[`Numero de factura: ${bill.billNumber}`, `Fecha de emisión: ${bill.date}`]} />
            <CheckoutSection title="Sus datos:" data={[`Nombre: ${bill.customer.name}`, `Email: ${bill.customer.emailAddress}`, `Numero de teléfono: ${bill.customer.phoneNumber}`, `Dirección: ${bill.customer.address}`]} />
            <CheckoutSection title="Datos del producto:" data={bill.cart.length > 0 ? bill.cart.map(product => `${product.name} | Precio: USD$${product.price}`) : ["No hay productos en el carrito."]} />
            <CheckoutSection title="Datos de la tarjeta:" data={[`Tarjeta de crédito: ${bill.creditCard.number}`, `Banco: Banco de la Nación Argentina`, `Titular: ${bill.customer.name}`]} />
        </div>
      </main>
      <CheckoutFooter bill={bill} onSubmit={onSubmit}/>
    </article>
  );
};

export default CheckoutResume;
