import React from 'react';
import Carousel from '../../components/organisms/carousel/carousel';
import ItemListContainer from '../../components/organisms/itemlistcontainer/itemlistcontainer';
import './style.css';
const Home = () => {
    return (
        <div className="container-fluid m-0 p-0">
            <Carousel/>
            <ItemListContainer/>
        </div>
    )
}
export default Home 