import ActionButton from "../../atoms/action-button/action-button";

const CardFooter = ({ buttons }) => {
    return (
      <div className="card-footer">
        {buttons ? (
            <>
                {buttons.map((button, index) => (
                <ActionButton
                    key={index}
                    name={button.name}
                    onClick={() => button.onClick(button.id)} // Pasar el id como argumento
                    type={button.type}
                    classname={button.classname}
                    disabled={button.disabled}
                />
                ))}
            </>
        ) : (
            <></>
        )}

      </div>
    );
  };
  
export default CardFooter;
  