import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import CreditCardForm from "../../components/organisms/credit-card-form/credit-card-form";
import PersonalDataForm from "../../components/organisms/form/personal-data-form";
import CartContext from "../../utils/context/cart-context";
import CartItem from "../../components/atoms/cart-item/cartitem";
import Customer from "../../utils/classes/customer";
import CreditCard from "../../utils/classes/credit-card";
import Bill from "../../utils/classes/bill";
import CheckoutResume from "../../components/organisms/checkout-form/checkout-resume";
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBBtn, MDBModalBody, MDBModalFooter } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [currentForm, setCurrentForm] = useState(1);
  const [allFormsCompleted, setAllFormsCompleted] = useState(null);
  const [formDataArray, setFormDataArray] = useState([]);
  const [billData, setBillData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Obtiene la función navigate

  useEffect(() => {
    if (currentForm > 2  ) {
      setAllFormsCompleted(true);
      generateBill();
    } 
    }, [formDataArray, allFormsCompleted]);

  const handleFormSubmit = (data) => {
    setFormDataArray([...formDataArray, data]);
    setCurrentForm(currentForm + 1)
    if (currentForm > 2) {
      setShowModal(true);
      console.log(showModal)
    }
  };

  const generateBill = () => {
    let actualDate = new Date();
    let day = actualDate.getDate().toString().padStart(2, '0');
    let month = (actualDate.getMonth() + 1).toString().padStart(2, '0'); // El mes se cuenta desde 0, por eso se suma 1
    let year = actualDate.getFullYear().toString();

    // Crear la cadena con el formato deseado
    let formattedDate = `${day}/${month}/${year}`;


    let customer = new Customer(formDataArray[0].nombre, formDataArray[0].apellido, formDataArray[0].direccion, formDataArray[0].email, formDataArray[0].telefono);
    let creditCardInfo = new CreditCard(formDataArray[1].cardNumber, formDataArray[1].securityCode, formDataArray[1].expirationDate);
    let bill = new Bill(generateBillNumber(), formattedDate, customer, cart, creditCardInfo);
    bill.calculateTotal();
    setBillData(bill);
    console.log(bill)
  }
  const generateBillNumber = () => {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = Math.floor(Math.random() * 10000); // Genera un número aleatorio de 0 a 9999
    let letter = letters.charAt(Math.floor(Math.random() * letters.length)); // Elige una letra aleatoria
    
    // Completa con ceros a la izquierda si el número es menor a 1000
    let numeroFactura = numbers.toString().padStart(4, '0');
    
    return numeroFactura + letter;
  }
  return (
    <div className="container d-flex flex-row justify-content-center p-4 ">
      {!allFormsCompleted ? <div className="col col-md-4   p-4 cart-container">
        <CartItem props={cart} />
      </div> : null}

      <div className={`${allFormsCompleted ? 'col-md-12' : 'col-md-8  p-4 d-flex flex-column align-items-center'}`}>
        <div className="progress-container mb-3">
          <div className={`step ${currentForm > 1 ? "completed" : ""} ${currentForm === 1 ? "current-step" : ""}`}>
            {currentForm === 1 ? (currentForm == 1 ? "1" : "1") : currentForm > 1 ? <i className="fas fa-check"></i> : "1"}
          </div>
          <div className="line">
            <div className={`active-progress ${currentForm === 1 ? "inactive" : ""} ${currentForm > 1 ? "completed" : ""}`} />
          </div>
          <div className={`step ${currentForm >= 2 ? "completed" : ""} ${currentForm === 2 ? "current-step" : ""}`}>
            {currentForm === 2 ? (currentForm >= 2 ? "2" : "2") : currentForm > 2 ? <i className="fas fa-check"></i> : "2"}
          </div>
          <div className="line">
            <div className={`active-progress ${currentForm === 2 ? "inactive" : ""} ${currentForm > 2 ? "completed" : ""}`} />
          </div>
          <div className={`step ${currentForm > 3 ? "completed" : ""} ${currentForm === 3 ? "current-step" : ""}`}>
            {currentForm === 3 ? (currentForm > 3 ? "" : "3") : currentForm > 3 ? <i className="fas fa-check"></i> : "3"}
          </div>
        </div>
        <div className="forms w-100" >
          {currentForm === 1 ? (
            <PersonalDataForm onSubmit={handleFormSubmit} />
          ) : currentForm === 2 ? (
            <CreditCardForm onSubmit={handleFormSubmit} />
          ) : allFormsCompleted ?  (
            <CheckoutResume bill={billData} onSubmit={handleFormSubmit}/>
          ) : (
            <p>Cargando...</p>
          )}
          <MDBModal show={showModal} setShow={showModal} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>¡Compra exitosa!</MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody>¡Muchas Gracias por su compra! En instantes recibirá un correo electrónico con la información detallada de su compra.</MDBModalBody>

                <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={() => 
                    {
                      setShowModal(false);
                      navigate("/home"); 
                    }
                    }>Cerrar</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
