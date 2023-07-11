import { ColorRing } from "react-loader-spinner";
import { useApi } from "../../../utils/api/useApi";
import { API_URL } from "../../../utils/constants/endpoints";
import './styles.css';
import FormItem from "../../molecules/form-item/form-item";
import { useContext } from "react";
import CategoryContext from "../../../utils/context/filter-context";
import ActionButton from "../../atoms/action-button/action-button";
const Aside = () => {
    const { selectedCategories, setSelectedCategories } = useContext(CategoryContext);
    const { data: apiResponse, loading: loadingPlatforms, error: errorResponse } = useApi({
        apiEndpoint: API_URL.RawgApi.urlPlatforms(''),
        httpVerb: API_URL.RawgApi.config,
    });
    const platforms = apiResponse.results; // Obtener el array de plataformas desde la respuesta de la API
    const onHandleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const selectedCategories = Array.from(formData.getAll('category'));
    
        setSelectedCategories(selectedCategories);
        console.log(selectedCategories);
    }

    if (loadingPlatforms) {
        return (
            <div className="loader-container">
                <ColorRing
                visible={true}
                height="120"
                width="120"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>
        )
    }
    
    if (errorResponse) {
        return <p>Error: {errorResponse.message}</p>;
    }

    if (!apiResponse || !apiResponse.results) {
        return null;
    }

    if (!platforms) {
        return null;
    }
    return (
        <aside className="aside">
            <form className="form p-2" id="filterForm" onSubmit={onHandleSubmit}>
                <p className="h4 text-center">
                    <i className="fas fa-filter"></i>
                    FILTRO 
                </p>
                <fieldset className="fieldset">
                    <legend>Plataformas</legend>
                    {platforms.map((platform, index) => (
                        <FormItem props={platform} name={"category"} type={"checkbox"} key={index}/>
                    ))}
                    <ActionButton type={"submit"} name={"Filtrar"} classname={"bg-success"}/>
                </fieldset>
            </form>
        </aside>
    );
};
export default Aside;