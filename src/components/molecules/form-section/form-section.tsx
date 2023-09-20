import FormItem from "../form-item/form-item"

const FormSection = ( {title, fields, handleInputChange} )  => {
    return (
        <div className="row">
            {fields.map( ( field ) => (
                <div className="col-md-6" key={field.name}>
                    <FormItem
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        value={FormData[field.name] || ""}
                        onChange={handleInputChange}
                        required={true}
                    />
                </div>
            ) )}
        </div>
    )
}
export default FormSection;