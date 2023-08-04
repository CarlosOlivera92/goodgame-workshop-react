import InputItem from "../../atoms/input-item/input-item";

const FormItem = ({ props, type, name, label, required, value, onChange }) => {
  if (type === "checkbox") {
    return (
      <div className="form-item">
        <InputItem props={props} type={type} name={name} value={value} />
        <label className="btn-icon">
          <span className="icon-wrapper"></span>
          {props.name}
        </label>
      </div>
    );
  } else {
    return (
      <div className="form-item d-flex flex-column">
        <label htmlFor={name}>{label}</label>
        <InputItem type={type} name={name} required={required} onChange={ onChange } />
      </div>
    );
  }
};

export default FormItem;
