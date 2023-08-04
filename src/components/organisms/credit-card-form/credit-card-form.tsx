import React, { useState } from "react";
import FormItem from "../../molecules/form-item/form-item";
import ActionButton from "../../atoms/action-button/action-button";

const CreditCardForm = ( { onSubmit } ) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    securityCode: "",
    expirationDate: "",
    ownerName: "",
    ownerAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any validation or additional processing here
    onSubmit(formData);
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <h2>Paso 2: Rellene con los datos de su tarjeta</h2>
      <div className="row">
        <div className="col-md-6">
          <FormItem
            type={"text"}
            name={"cardNumber"}
            label={"Numero de tarjeta de credito"}
            value={formData.cardNumber}
            onChange={handleInputChange}
            required={true}
          />
        </div>
        <div className="col-md-6">
          <FormItem
            type={"text"}
            name={"securityCode"}
            label={"Código de seguridad"}
            value={formData.securityCode}
            onChange={handleInputChange}
            required={true}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <FormItem
            type={"month"}
            name={"expirationDate"}
            label={"Fecha de expiración"}
            value={formData.expirationDate}
            onChange={handleInputChange}
            required={true}
          />
        </div>
        <div className="col-md-6">
          <FormItem
            type={"text"}
            name={"ownerName"}
            label={"Nombre del titular"}
            value={formData.ownerName}
            onChange={handleInputChange}
            required={true}
          />
        </div>
      </div>
      <div className="row">
        <FormItem
          type={"text"}
          name={"ownerAddress"}
          label={"Dirección jurídica del titular"}
          value={formData.ownerAddress}
          onChange={handleInputChange}
          required={true}
        />
      </div>
      <ActionButton
        type={"submit"}
        name={"Pagar"}
        classname={"mt-3 form-button"}
        disabled={false}
      />
    </form>
  );
};

export default CreditCardForm;
