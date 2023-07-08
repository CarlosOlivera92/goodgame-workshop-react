import Carousel from '../../components/organisms/carousel/carousel';
import ItemListContainer from '../../components/organisms/itemlistcontainer/itemlistcontainer';
import codbo from '../../assets/img/codbo.jpg';
import rdr2 from "../../assets/img/rdr2.webp";
import wrc from "../../assets/img/wrc.jpg";
import './style.css';

const Home = () => {
  const carouselImages = [codbo, rdr2, wrc];

  return (
    <div className="container-fluid m-0 p-0">
      <Carousel images={carouselImages} />
      <ItemListContainer/>
    </div>
  );
};

export default Home;
