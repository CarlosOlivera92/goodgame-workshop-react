import InputItem from "../../atoms/input-item/input-item";

const FormItem = ( {props, type, name} ) => {
    return (
        <div className="form-item">
            <InputItem props={props} type={type} name={name} />
            <label className="btn-icon">
                <span className="icon-wrapper"></span>
                {props.name}
            </label>
        </div>
    )
}
export default FormItem;