
const ActionButton = ( {name, onClick, type, classname} ) => {
    return <button className={`btn button ${classname}`} onClick={onClick} type={type}> {name} </button>;
};
export default ActionButton;