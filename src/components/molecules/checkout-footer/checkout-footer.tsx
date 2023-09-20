import ActionButton from "../../atoms/action-button/action-button";

const CheckoutFooter = ( {bill, onSubmit} ) => {
    return(
        <footer className="checkout-footer">
            <p className="total-resume">Total: USD${bill.total}</p>
            <div className="action-buttons">
            <ActionButton
                name={"Confirmar Compra"}
                type={"button"}
                classname={"btn btn-success"}
                disabled={false}
                onClick={onSubmit}
            />
            </div>
        </footer>
    )
}
export default CheckoutFooter;