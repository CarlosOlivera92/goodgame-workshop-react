const InputItem = ( { props, type, name } ) => {
    return (
        <input type={type} id={props.id} name={name} value={props.id} />
    )
}
export default InputItem;