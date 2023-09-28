import FormItem from "../form-item/form-item"; // Asegúrate de importar FormItem desde la ubicación correcta

const FormSection = ({ title, fields, values, errors, handleChange }) => {
    return (
        <div className="row">
            {fields.map((field, index) => (
                <div className="col-md-6" key={field.name}>
                    <FormItem
                        props={field}
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        value={values[field.name] || ""}
                        onChange={handleChange}
                        error={errors[field.name]}
                        required={false}
                    />
                </div>
            ))}
        </div>
    );
};
export default FormSection;
