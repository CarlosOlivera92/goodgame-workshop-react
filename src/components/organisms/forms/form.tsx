import { useState } from "react";
import FormSection from "../../molecules/form-section/form-section";
import ActionButton from "../../atoms/action-button/action-button";
import { useFormik } from "formik";
import * as Yup from "yup";
import './styles.css';
const Form = ( { title, fields, onSubmit } ) => {
  const [formData, setFormData] = useState({});
  const formik = useFormik({
    initialValues: {
      // Inicializa los valores según los campos recibidos
      ...fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {}),
    },
    validationSchema: Yup.object().shape(
      // Define el esquema de validación según los campos recibidos
      fields.reduce((acc, field) => {
        acc[field.name] = field.validation;
        return acc;
      }, {})
    ),
    onSubmit: (values) => {
      console.log("Formulario enviado:", values);
      onSubmit(values);
    },
  });
  return(
    <form className="mb-3" onSubmit={formik.handleSubmit}>
      <h2>{title}</h2>
      <FormSection
        title={title}
        fields={fields}
        values={formik.values} // Pasa los valores de Formik
        errors={formik.errors} // Pasa los errores de Formik
        handleChange={formik.handleChange} // Pasa la función handleChange de Formik
      />
      <ActionButton
        type={"submit"}
        name={"Enviar"}
        classname={"mt-3 form-button"}
        disabled={!formik.isValid}
        onClick={""}
      />
    </form>
  )
} 
export default Form;