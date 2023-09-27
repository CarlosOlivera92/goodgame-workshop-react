import Badge from "../../atoms/badge/badge";
import Divider from "../../atoms/divider/divider";
import TextContent from "../../atoms/text-content/text-content";

const CardBody = ({ title, text, product }) => {
    const filteredKeys = ["price", "platforms"];
    return (
        <div className="card-body">
            <h4>{title}</h4>
            <Divider />
            {product ? (
            <>
                {filteredKeys.map((key) => (
                    key === "platforms" && product[key] ? (
                    <div key={key}>
                        {product[key].map((platform, index) => (
                            <Badge name={platform.platform.name}/>
                        ))}
                    </div>
                ) : (
                    product[key] && (
                    <TextContent key={key} text={`Precio: $${product[key]} USD`} />
                    )
                )
                ))}
            </>
            ) : (
                <TextContent text={text} />
            )}
        </div>
    );
};
  
export default CardBody;
  