import FormItem from "../form-item/form-item"; // Asegúrate de importar FormItem desde la ubicación correcta

const FormSection = ({ title, fields, values, errors, handleChange }) => {
    return (
        <div className="row">
            {fields.map((field) => (
                <div className="col-md-6" key={field.name}>
                    <FormItem
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        value={values[field.name] || ""}
                        onChange={handleChange}
                        error={errors[field.name]}
                    />
                </div>
            ))}
        </div>
    );
};
//TENGO QUE SEGUIR RASTREANDO POR QUE NO ANDA EL ONSUBMIT CON EL FORMIK
export default FormSection;
