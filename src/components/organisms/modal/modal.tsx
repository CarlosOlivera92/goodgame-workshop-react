import Divider from "../../atoms/divider/divider";
import ModalBody from "../../molecules/modal-body/modal-body";
import ModalFooter from "../../molecules/modal-footer/modal-footer";
import ModalHeader from "../../molecules/modal-header/modal-header";
import './styles.css';

const Modal = ( {title, text, closeModal, showModal} ) => {
    return(
        <div className={`modal-container ${showModal ? 'show' : 'hide'}`}>
            <div className={`modal ${showModal ? 'show' : 'hide'}`}>
                <ModalHeader title={title}/>
                <Divider/>
                <ModalBody text={text}/>
                <ModalFooter closeModal={closeModal}/>
            </div>
        </div>
    )
}
export default Modal;