const ActionButton = ( {name, onClick} ) => {
    return <button className="btn button" onClick={onClick}> {name} </button>;
};
export default ActionButton;