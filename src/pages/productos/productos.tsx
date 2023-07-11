import { useState } from "react";
import Aside from "../../components/organisms/aside/aside";
import ItemListContainer from "../../components/organisms/itemlistcontainer/itemlistcontainer"
import CategoryContext from "../../utils/context/filter-context";

const Productos = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    return (
        <CategoryContext.Provider value={{ selectedCategories, setSelectedCategories }}>
            <div className="row">
                <div className="col-3">
                    <Aside />
                </div>
                <div className="col-9">
                    <ItemListContainer />
                </div>
            </div>
        </CategoryContext.Provider>
    )
}
export default Productos;