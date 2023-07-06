import { useState } from "react";
import codbo from '../../../assets/img/codbo.jpg';
import rdr2 from "../../../assets/img/rdr2.webp";
import wrc from "../../../assets/img/wrc.jpg";
import './styles.css';
const Carousel = (props: any) => {
  const images = [codbo, rdr2, wrc];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectNewImage = (index: number, images: string[], next = true) => {
    const nextIndex = next ? index + 1 : index - 1;
    const lastIndex = images.length - 1;
  
    if (nextIndex > lastIndex) {
      setSelectedImage(images[0]);
      setSelectedIndex(0);
    } else if (nextIndex < 0) {
      setSelectedImage(images[lastIndex]);
      setSelectedIndex(lastIndex);
    } else {
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }
  
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  return (
    <div className="hero container-fluid">
      <div className="image">
        <img src={selectedImage} alt="" />
      </div>
      <div className="buttons">
        <button onClick={previous}>{'<'}</button>
        <button onClick={next}>{'>'}</button>
      </div>
    </div>
  );
};

export default Carousel;