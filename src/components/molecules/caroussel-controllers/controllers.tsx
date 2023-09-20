import ActionButton from "../../atoms/action-button/action-button";

const CarouselControllers = ( { onPrevious, onNext, classname } ) => {
    return(
        <div className="controllers">
            <ActionButton name={"<"} onClick={onPrevious} type={"button"} classname={classname} disabled={false}></ActionButton>
            <ActionButton name={">"} onClick={onNext} type={"button"} classname={classname} disabled={false}></ActionButton>
        </div>
    )
}
export default CarouselControllers;