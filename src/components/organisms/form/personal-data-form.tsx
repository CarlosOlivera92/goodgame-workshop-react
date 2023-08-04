import React, { useState } from "react";
import FormItem from "../../molecules/form-item/form-item";
import ActionButton from "../../atoms/action-button/action-button";

const PersonalDataForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
    email: "",
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
    onSubmit(formData);
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <h2>Paso 1: Rellene sus datos personales</h2>
      <div className="row">
        <div className="col-md-6">
          <FormItem
            type={"text"}
            name={"nombre"}
            label={"Nombre"}
            value={formData.nombre} 
            onChange={handleInputChange}
            required={true}
          />
        </div>
        <div className="col-md-6">
          <FormItem
            type={"text"}
            name={"apellido"}
            label={"Apellido"}
            value={formData.apellido} // Corregir aquí
            onChange={handleInputChange}
            required={true}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <FormItem
            type={"number"}
            name={"telefono"}
            label={"Número de teléfono"}
            value={formData.telefono} // Corregir aquí
            onChange={handleInputChange}
            required={true}
          />
        </div>
        <div className="col-md-6">
          <FormItem
            type={"text"}
            name={"direccion"}
            label={"Dirección"}
            value={formData.direccion} // Corregir aquí
            onChange={handleInputChange}
            required={true}
          />
        </div>
      </div>
      <div className="row">
        <FormItem
          type={"text"}
          name={"email"}
          label={"Email"}
          value={formData.email} // Corregir aquí
          onChange={handleInputChange}
          required={true}
        />
      </div>
      <ActionButton
        type={"submit"}
        name={"Enviar"}
        classname={"mt-3 form-button"}
        disabled={false}
      />
    </form>
  );
};

export default PersonalDataForm;


