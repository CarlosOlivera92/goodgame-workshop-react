import ActionButton from "../action-button/action-button";
import './style.css';
export const BuyInfo = ({total, onClick}) => {
    if (total > 0) {
        return (   
            <div className="buyInfo bg-dark d-flex flex-column align-items-center p-2 rounded">
                <p>Total USD ${total}</p>
                <ActionButton type={"button"} name={"Comprar Ahora"} onClick={ () => 
                                onClick()
                } classname={"button"}/>
            </div>
        )
    }

}
export default BuyInfo;