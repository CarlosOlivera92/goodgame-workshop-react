import Carousel from '../../components/atoms/carousel/carousel';
import ItemListContainer from '../../components/organisms/itemlistcontainer/itemlistcontainer';
import codbo from '../../assets/img/codbo.jpg';
import rdr2 from "../../assets/img/rdr2.webp";
import wrc from "../../assets/img/wrc.jpg";
import './style.css';
import CategoryContext from '../../utils/context/filter-context';

const Home = () => {
  const carouselImages = [codbo, rdr2, wrc];

  return (
    <CategoryContext.Provider value={{ selectedCategories: [], setSelectedCategories: () => {} }}>
      <div className="container-fluid m-0 p-0">
        <Carousel images={carouselImages} />
        <ItemListContainer/>
      </div>
    </CategoryContext.Provider>
  );
};

export default Home;
