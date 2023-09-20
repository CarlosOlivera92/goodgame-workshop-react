import { useState } from "react";
import FormSection from "../../molecules/form-section/form-section";
import ActionButton from "../../atoms/action-button/action-button";

const Form = ( { title, fields, onSubmit } ) => {
    const [formData, setFormData] = useState({});

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
    return(
        <form className="mb-3" onSubmit={handleSubmit}>
            <h2>{title}</h2>
            <FormSection title={title} fields={fields} handleInputChange={handleInputChange}/>
            <ActionButton
                type={"submit"}
                name={"Enviar"}
                classname={"mt-3 form-button"}
                disabled={false}
            />
        </form>
    )
} 
export default Form;