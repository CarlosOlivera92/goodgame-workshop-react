import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import CartContext from "../../utils/context/cart-context";
import CartItem from "../../components/atoms/cart-item/cartitem";
import Customer from "../../utils/classes/customer";
import CreditCard from "../../utils/classes/credit-card";
import Bill from "../../utils/classes/bill";
import CheckoutResume from "../../components/organisms/checkout-form/checkout-resume";
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBBtn, MDBModalBody, MDBModalFooter } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Form from "../../components/organisms/forms/form";
import ProgressTracker from "../../components/organisms/progress-tracker/progress-tracker";

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const [currentForm, setCurrentForm] = useState(1);
  const [allFormsCompleted, setAllFormsCompleted] = useState(null);
  const [formDataArray, setFormDataArray] = useState([]);
  const [billData, setBillData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Obtiene la función navigate
  const forms = [
    {
      title: "Paso 1: Rellene sus datos personales",
      fields: [
        { name: "nombre", label: "Nombre", type: "text", required: true },
        { name: "apellido", label: "Apellido", type: "text", required: true },
        { name: "telefono", label: "Número de teléfono", type: "number", required: true },
        { name: "direccion", label: "Dirección", type: "text", required: true },
        { name: "email", label: "Email", type: "text", required: true },
      ],
    },
    {
      title: "Paso 2: Rellene con los datos de su tarjeta",
      fields: [
        { name: "cardNumber", label: "Número de tarjeta de crédito", type: "text", required: true },
        { name: "securityCode", label: "Código de seguridad", type: "text", required: true },
        { name: "expirationDate", label: "Fecha de expiración", type: "month", required: true },
        { name: "ownerName", label: "Nombre del titular", type: "text", required: true },
        { name: "ownerAddress", label: "Dirección jurídica del titular", type: "text", required: true },
      ],
    },
  ];
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
        <ProgressTracker currentForm={currentForm} />
        <div className="forms w-100" >
          {currentForm === 1 ? (
            <Form title={forms[currentForm - 1].title} fields={forms[currentForm - 1].fields} onSubmit={handleFormSubmit} />
            ) : currentForm === 2 ? (
              <Form title={forms[currentForm -1].title} fields={forms[currentForm - 1].fields} onSubmit={handleFormSubmit} />
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
                      localStorage.clear();
                      setCart([]);
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
