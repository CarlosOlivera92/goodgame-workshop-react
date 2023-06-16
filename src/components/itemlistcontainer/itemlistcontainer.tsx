interface ItemListContainerProps {
    greeting: string;
}

const ItemListContainer = ({ greeting }: ItemListContainerProps) => {
    return (
        <div className="container">
            <h2 className="text-center">{greeting}</h2>
        </div>
    );
};

export default ItemListContainer;