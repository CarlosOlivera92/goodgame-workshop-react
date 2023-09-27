import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import CartContext from "../../utils/context/cart-context";
import CartItem from "../../components/atoms/cart-item/cartitem";
import CheckoutResume from "../../components/organisms/checkout-form/checkout-resume";
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBBtn, MDBModalBody, MDBModalFooter } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Form from "../../components/organisms/forms/form";
import ProgressTracker from "../../components/organisms/progress-tracker/progress-tracker";
import * as Yup from 'yup';
import { generateBill, generateBillNumber } from "../../utils/billingUtils/billing-utils";
import Modal from "../../components/organisms/modal/modal";

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const [currentForm, setCurrentForm] = useState(1);
  const [allFormsCompleted, setAllFormsCompleted] = useState(null);
  const [formDataArray, setFormDataArray] = useState([]);
  const [billData, setBillData] = useState([]);
  const [billNumber, setBillNumber] = useState(""); // Agrega una variable de estado para el número de factura
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Obtiene la función navigate
  const forms = [
    {
      title: "Paso 1: Rellene sus datos personales",
      fields: [
        { name: "nombre", label: "Nombre", type: "text", validation: Yup.string().required()},
        { name: "apellido", label: "Apellido", type: "text", validation: Yup.string().required()},
        { name: "telefono", label: "Número de teléfono", type: "number", validation: Yup.number().required()},
        { name: "direccion", label: "Dirección", type: "text", validation: Yup.string().required()},
        { name: "email", label: "Email", type: "text", validation: Yup.string().email().required() },
      ],
    },
    {
      title: "Paso 2: Rellene con los datos de su tarjeta",
      fields: [
        { name: "cardNumber", label: "Número de tarjeta de crédito", type: "text", validation: Yup.number().required() },
        { name: "securityCode", label: "Código de seguridad", type: "text",  validation: Yup.string()
        .required("Campo requerido")
        .min(3, "El código debe ser de 3 dígitos")
        .max(3, "El código debe ser de 3 dígitos"), },
        { name: "expirationDate", label: "Fecha de expiración", type: "month", validation: Yup.date().required() },
        { name: "ownerName", label: "Nombre del titular", type: "text", validation: Yup.string().oneOf([Yup.ref("nombre")], "El nombre debe ser coincidir con el titular de la tarjeta").required() },
        { name: "ownerAddress", label: "Dirección jurídica del titular", type: "text",validation: Yup.string().oneOf([Yup.ref("direccion")], "La dirección debe ser coincidir con el titular de la tarjeta").required()},
      ],
    },
  ];
  useEffect(() => {
    if (currentForm > 2) {
      setAllFormsCompleted(true);
      const generatedBill = generateBill(formDataArray, cart);
      const generatedBillNumber = generateBillNumber();
      setBillData(generatedBill); // Usar generatedBill en lugar de bill
      setBillNumber(generatedBillNumber); // Usar generatedBillNumber en lugar de generatedBillNumber
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
  const closeModal = () => {
    setShowModal(false);
    localStorage.clear();
    setCart([]);
    navigate("/home"); 
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
            <Form title={forms[currentForm -1].title} fields={forms[currentForm - 1].fields} onSubmit={handleFormSubmit} />
            ) : currentForm === 2 ? (
              <Form title={forms[currentForm -1].title} fields={forms[currentForm - 1].fields} onSubmit={handleFormSubmit} />
              ) : allFormsCompleted ?  (
            <CheckoutResume bill={billData} onSubmit={handleFormSubmit}/>
          ) : (
            <p>Cargando...</p>
          )}
          <Modal title={"¡Compra exitosa!"} text={`¡Muchas Gracias por su compra! En instantes recibirá un correo electrónico con la información detallada de su compra.`} closeModal={closeModal} showModal={showModal}/>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
